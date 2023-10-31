import React from 'react'
import LogoNavigation from './LogoNavigation'
import MenuNavigation from './MenuNavigation'
import SmallDeviceNav from './SmallDeviceNav'

function Navigation() {
  return (
    <nav className="w-full block shadow-lg">
        <div className="w-[90%] mx-auto sm:w-[600px] md:w-[700px] lg:w-[900px] xl:w-[1220px] flex justify-between items-center my-3 relative">
          {/* Logo */}
          <LogoNavigation />
          {/* Menu Links */}
          <MenuNavigation />
          {/* Small device Menu  */}
          <SmallDeviceNav /> 
        </div>
      </nav>
  )
}

export default Navigation