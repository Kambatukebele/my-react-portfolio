import React from 'react'
import LogoNavigation from './LogoNavigation'
import MenuNavigation from './MenuNavigation'
import SmallDeviceNav from './SmallDeviceNav'
//Receiving data for isOpenCloseMenu

function Navigation({isOpenCloseMenu,  toggle}) {
  return (
    <nav className="w-full block shadow-lg bg-gray-50 py-3">
        <div className="w-[90%] mx-auto sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1220px] flex justify-between items-center relative">
          {/* Logo */}
          <LogoNavigation />
          {/* Menu Links */}
          <MenuNavigation isOpenCloseMenu = {isOpenCloseMenu} toggle = {toggle} />
          {/* Small device Menu  */}
          <SmallDeviceNav isOpenCloseMenu = {isOpenCloseMenu} toggle = {toggle} /> 
        </div>
      </nav>
  )
}

export default Navigation