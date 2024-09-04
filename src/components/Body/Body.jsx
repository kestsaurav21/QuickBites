import React, { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import MenuCard from '../MenuCard/MenuCard';
import menuList from '../../utils/mockData';

const Body = () => {

    const [data, setData] = useState([]);
    
    useEffect(()=> {
        setData(menuList)
    }, [])
  
    console.log(data);
    
    
    

  return (
    <div>
        <SearchBar/>
        <div className='flex flex-wrap'>
        {
            data?.map( (item, index) => (<MenuCard key={index} resData={item}/>)  )
        }
        </div>
        
        
    </div>
  )
}

export default Body