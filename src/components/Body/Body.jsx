import React, { useEffect, useState } from 'react'
import MenuCard from '../MenuCard/MenuCard';

const Body = ({ menuData }) => {
  const [value, setValue] = useState("");
  const [data, setData] = useState(menuData);
  
  
    function handleChange (e){
      setValue(e.target.value) 
      console.log(value);  
    }

    function handleSearch(){

      if(!value) setData(menuData);

      const arr = menuData.filter((item) =>
        item.name.includes(value)
      )
      setData(arr);
      
      
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
        <button className='px-4 py-2 m-4 rounded-xl bg-black text-white'>Top Rated</button>
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