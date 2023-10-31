import React from 'react'

function SmallDeviceNav({isOpenCloseMenu,  toggle}) {
  const handleClick = () => {
    toggle();
  }
  return (
    <div className="border border-blue-700 w-10 flex justify-center items-center cursor-pointer shadow-xl lg:hidden">
      {/* Hamburger Menu */}
      <i class="fa-solid fa-bars text-2xl text-blue-700 block" onClick={handleClick} style={{ display: isOpenCloseMenu ? 'none' : 'block' }}></i>
      {/* Close Menu */}
      <i class="fa-solid fa-xmark text-2xl text-blue-700" onClick={handleClick} style={{ display: isOpenCloseMenu ? 'block' : 'none' }}></i>
    </div> 
  )
}

export default SmallDeviceNav