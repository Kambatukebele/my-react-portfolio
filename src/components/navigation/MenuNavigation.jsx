import React from 'react'
import NavLinks from '../NavLinks'

function MenuNavigation({ isOpenCloseMenu, toggle }) {
    const menuVisibilityClass = isOpenCloseMenu ? 'block' : 'hidden';
  return (   
    <>
        <ul className={`absolute z-50 h-fit bg-gray-50 w-full top-9 lg:flex lg:w-96 lg:justify-between lg:items-center lg:static ${menuVisibilityClass}`}>
        <li className="block my-4 text-center text-sm">
            <a className="uppercase text-blue-700 font-medium" href="#">Home</a>
        </li>
        <li className="block my-4 text-center text-sm">
            <a className="uppercase text-blue-700 font-medium" href="#">Portfolio</a>
         </li>
        <li className="block my-4 text-center text-sm">
            <a className="uppercase text-blue-700 font-medium" href="#">About me</a>
        </li>
        <li className="block my-4 text-center text-sm">
            <a className="uppercase text-blue-700 font-medium" href="#">Contact me</a>
        </li>
        </ul>
    </>
  )
}

export default MenuNavigation