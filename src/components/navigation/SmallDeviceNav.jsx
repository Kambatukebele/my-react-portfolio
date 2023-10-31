import React from 'react'

function SmallDeviceNav() {
  return (
    <div className="border border-blue-700 w-10 flex justify-center items-center cursor-pointer shadow-xl lg:hidden">
      {/* Hamburger Menu */}
      <i class="fa-solid fa-bars text-2xl text-blue-700 block"></i>
      {/* Close Menu */}
      <i class="fa-solid fa-xmark text-2xl text-blue-700 hidden"></i>
    </div>  
  )
}

export default SmallDeviceNav