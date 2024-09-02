import React from 'react'

const SearchBar = () => {
  return (
    
    <div className='w-full flex justify-center items-center' >

        <input className='bg-gray-300 rounded-xl text-black  m-4 p-2 w-[40%]'
        type="text" placeholder='Search a restaurant you want...' />
        <button className='px-4 py-2 m-4 rounded-xl bg-black text-white'>Search</button>
        <button className='px-4 py-2 m-4 rounded-xl bg-black text-white'>Top Rated</button>
    </div>
  )
}

export default SearchBar