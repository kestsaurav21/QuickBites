import React, { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import MenuCard from '../MenuCard/MenuCard';

const Body = (props) => {
    
    const { menuData } = props
    

  return (
    <div >
        <SearchBar/>
        <div className='flex flex-wrap justify-evenly'>
        {
            menuData?.map( (item, index) => (<MenuCard key={index} resData={item}/>)  )
        }
        </div>
        
        
    </div>
  )
}

export default Body