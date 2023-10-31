import React from 'react'

function MenuNavigation() {
  return (
    <>
        <ul className="hidden absolute bg-gray-100 w-full top-9 lg:bg-white lg:flex lg:w-96 lg:justify-between lg:items-center lg:static">
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