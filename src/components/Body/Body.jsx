import React, { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { SWIGGY_API } from '../../utils/constants';
import RestaurantCard from '../RestaurantCard/RestaurantCard';

const Body = () => {

    const [data, setData] = useState([]);

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(SWIGGY_API);
        const json = await response.json();
        
        const resData = json.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setData(resData);
    }
    
    
    

  return (
    <div >
        <SearchBar/>
        {
            data?.map(item => <RestaurantCard resData={item} />)
        }

        {/* {
            data?.map(item => <p>{item}</p>)
        } */}
    </div>
  )
}

export default Body