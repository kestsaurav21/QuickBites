import React, { useEffect, useState } from 'react'
import MenuCard from '../MenuCard/MenuCard';

const Body = ({ menuData }) => {
  const [value, setValue] = useState("");
  const [data, setData] = useState(menuData);
  // const [filter, setFilter] = useState("");
  
  
    function handleChange (e){
      setValue(e.target.value) 
      console.log(value);  
    }

    function handleSearch(){

      if(!value) setData(menuData);

      const arr = menuData.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
      setData(arr);
      
      
    }

    function handleFeatured(e){

      console.log(e.target.value);
      
      if(e.target.value === "Featured") setData(menuData);

      else if (e.target.value === "Top Rated"){
        const arr = menuData?.filter((item) => 
          item.rate > 4 
        )
        setData(arr)
      }
      else if(e.target.value === "Low Price"){
        const sortArr = menuData.sort((a,b)=> a.price - b.price);
        setData(sortArr);

      }
      
     
    }
    


  return (
    <div >
        <div className='w-full flex justify-center items-center' >

        <input 
        onChange={(e) => handleChange(e)}
        className='bg-gray-300 rounded-xl text-black  m-4 p-2 w-[40%]'
        type="text" placeholder='Search a restaurant you want...' />
        <button 
        onClick={()=> handleSearch()}
        className='px-4 py-2 m-4 rounded-xl bg-black text-white'>Search</button>
        <select 
        onChange={(e)=> handleFeatured(e)}
        className='px-4 py-2 m-4 rounded-xl bg-black text-white'>
        <option value="Featured">Featured</option>
        <option value="Top Rated">Top Rated</option>
        <option value="Low Price">Low Price</option>
        </select>
        </div>

        <div className='flex flex-wrap justify-evenly'>
        {
            data.map( (item, index) => (<MenuCard key={index} resData={item}/>)  )
        }
        </div>
        
        
    </div>
  )
}

export default Body