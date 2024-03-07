import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
        <footer className="bg-gray-900 py-10 h-fit ">
            <div className="w-[90%] mx-auto sm:w-[600px] lg:w-[900px]">
                <div className="text-white text-center">
                <span>Copyright {currentYear}</span> <span><a className="text-blue-700 text-semibold" href="https://webizycode.com/">WebizyCode</a> All rights reserved</span>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer