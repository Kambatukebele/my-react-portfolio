import "./App.css";
import { useState } from "react";
import Navigation from "./components/navigation/Navigation"
import Header from "./components/header/Header";
import Stack from "./components/stack/Stack";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";


function App() {
    const [isOpenCloseMenu, SetIsOpenCloseMenu] = useState(false);
    const toggle = () => {
      SetIsOpenCloseMenu (!isOpenCloseMenu)
    }

  return (
    <div className="App">
      {/* Navigation */}
      <Navigation isOpenCloseMenu = {isOpenCloseMenu} toggle = {toggle} />
      {/* Header */}   
      <Header />        
      {/* === TECH STACK SECTION === */}
      <Stack />      
      {/* === PROJECTS & PORTFOLIO === */}
      <Portfolio />
      {/* === ABOUT SECTION === */}
      <About />
      {/* CONTACT SECTION */}
      <section className="bg-white py-10 h-fit">
        <div className="w-[90%] mx-auto sm:w-[600px] lg:w-[900px]">
          <div className="">
            <h2 className="text-4xl text-blue-500 uppercase font-extrabold my-3 text-center">Contact</h2>
            <h3 className="text-base font-normal text-gray-500 mb-3 text-center">
              Don't be shy! hit me up!
            </h3>
          </div>
          <div className="min-w-[286px] mx-auto md:flex md:justify-between md:items-center">
            <div className="rounded-lg my-10 flex flex-col justify-center items-center">
              <span className="flex justify-center items-center w-12 h-12 shadow-xl  rounded-full mb-5">
                <i class="fa-solid fa-map text-blue-700"></i>
              </span>
              <div className="">
                <h4 className="font-semibold text-md text-center">Location</h4>
                <h5 className="text-gray-500 font-semibold text-base text-center">Prague, Czechia</h5>
              </div>
            </div>
            <div className="rounded-lg my-10 flex flex-col justify-center items-center">
              <span className="flex justify-center items-center w-12 h-12 shadow-xl  rounded-full mb-5">
              <i class="fa-regular fa-envelope text-blue-700"></i>
              </span>
              <div className="">
                <h4 className="font-semibold text-md text-center">Mail</h4>
                <h5 className="text-gray-500 font-semibold text-base text-center">kambatuke@webizycode.com</h5>
              </div>
            </div>   
            <div className="rounded-lg my-10 flex flex-col justify-center items-center">
              <span className="flex justify-center items-center w-12 h-12 shadow-xl  rounded-full mb-5">
              <i class="fa-solid fa-phone text-blue-700"></i>
              </span>
              <div className="">
                <h4 className="font-semibold text-md text-center">Phone</h4>
                <h5 className="text-gray-500 font-semibold text-base text-center">+420 607 284 825</h5>
              </div>
            </div>      
          </div>
        </div>
      </section>
      {/* === FOOTER === */}
      <footer className="bg-gray-900 py-10 h-fit ">
        <div className="w-[90%] mx-auto sm:w-[600px] lg:w-[900px]">
          <div className="text-white text-center">
            <span>Copyright 2023</span> <span><a className="text-blue-700 text-semibold" href="https:://webizycode.com">WebizyCode</a> All rights reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
