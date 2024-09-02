import React, { useState } from 'react'
import logo from '../../assets/logo.png';





const Header = () => {

const [btn, setBtn] = useState("Login");

  return (
    <div className='flex justify-between'>
        <div className='cursor-pointer'>
            <img className='w-40'
            src={logo} alt="logo" />
        </div>
        <div className='flex items-center px-4'>
            <ul className='flex space-x-4'>
                <li className='px-8 cursor-pointer'>Home</li>
                <li className='px-8 cursor-pointer'>About</li>
                <li className='px-8 cursor-pointer'>Contact</li>
                <li className='px-8 cursor-pointer'>Cart</li>

                <button className='px-6  bg-orange-600 text-white font-bold rounded-xl cursor-pointer'
                onClick={() => {
                    btn === 'Login' 
                    ? setBtn("Logout") 
                    : setBtn("Login");
                }}
                >{btn}</button>
            </ul>
            
        </div>

    </div>
  )
}

export default Header