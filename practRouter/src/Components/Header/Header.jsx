import React from 'react'
import { Link,NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='w-full h-20 bg-slate-800'>
      <ul className='flex justify-around'>
        <li className='text-white'>
          <NavLink to='/about'>
            About
          </NavLink>
        </li>
        <li className='text-white'>
          <NavLink to='/contact'>
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header