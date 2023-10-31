import "./App.css";
import { useState } from "react";
import Navigation from "./components/navigation/Navigation"
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Stack from "./components/sectionStack/Stack";
import About from "./components/about/About";
import rental from "./assets/images/car-rental.webp";


function App() {
  // useState to Toggle the menu on small device
    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => {
    //   setIsOpen(!isOpen);
    // };
    const [isOpenCloseMenu, SetIsOpenCloseMenu] = useState(false);
    const toggle = () => {
      SetIsOpenCloseMenu (!isOpenCloseMenu)
    }

  return (
    <div className="App">
      {/* === HEADER SECTION === */}
      {/* <Header isOpen={isOpen} toggle={toggle} /> */}
      <Navigation isOpenCloseMenu = {isOpenCloseMenu} toggle = {toggle} />      
      {/* === HERO SECTION === */}
      <Header />
      {/* <Hero /> */}     
      {/* === TECH STACK SECTION === */}
      {/* <Stack /> */}
      <section className="hidden w-full lg:flex lg:justify-end lg:h-[120px] bg-gray-50">
        <div className="w-[90%] mx-auto sm:w-[600px] md:w-[700px] lg:w-[900px] lg:flex lg:justify-between lg:items-center xl:w-[1220px]">
          <div className="w-14 h-14 grayscale">
            <img className="w-full h-full object-cover object-center" src="src/assets/images/laravel.svg" alt="laravel-logo" />
          </div>
          <div className="w-14 h-14 grayscale">
            <img className="w-full h-full object-cover object-center" src="src/assets/images/mysql.svg" alt="mysql-logo" />
          </div>
          <div className="w-14 h-14 grayscale">
            <img className="grayscale w-full h-full object-cover object-center" src="src/assets/images/git-svgrepo-com (1).svg" alt="git-logo" />
          </div>
          <div className="w-14 h-14 grayscale">
            <img className="w-full h-full object-cover object-center" src="src/assets/images/reactjs.svg" alt="reactjs-logo" />
          </div> 
          <div className="w-14 h-14 grayscale">
            <img className="w-full h-full object-cover object-center" src="src/assets/images/tailwind.svg" alt="tailwindcss-logo" />
          </div>
          <div className="w-14 h-14 grayscale">
            <img className="w-full h-full object-cover object-center" src="src/assets/images/css.svg" alt="css-logo" />
          </div>
          <div className="w-14 h-14 grayscale">
            <img className="w-full h-full object-cover object-center" src="src/assets/images/html.svg" alt="html-logo" />
          </div>
        </div>
      </section>
      {/* === PROJECTS & PORTFOLIO === */}
      <section className="w-full h-fit py-10 relative" id="projects">
        <div className="w-[90%] mx-auto sm:w-[600px] md:w-[700px] lg:w-[990px]">
          <div className="">
            <h2 className="text-4xl text-blue-500 font-extrabold my-3 text-center uppercase">Portfolio</h2>
            <h3 className="text-base font-normal text-gray-500 mb-3 text-center">
              Each project is a unique piece of development
            </h3>
          </div>
          <div className="w-[286px] mx-auto flex flex-col justify-center items-center sm:flex-row">
            <button className="block bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-l text-white text-base w-48 py-3 rounded-md font-normal transition delay-150 duration-300 ease-in-out sm:mr-2 lg:py-4 mb-2 sm:mb-0">
                Back-End
            </button>
            <button className="block bg-gradient-to-r from-sky-500 to-indigo-500 hover:bg-gradient-to-l text-white text-base w-48 py-3 rounded-md font-normal transition delay-150 duration-300 ease-in-out sm:mr-2 lg:py-4">
                Front-End
            </button>
          </div>
          {/* Cards */}
          <div className="my-10">
            {/* Card */}
            <div className="min-w-[286px] h-[725px] mx-auto shadow-xl rounded-xl border p-5 lg:flex lg:h-[410px] lg:bg-gray-50 mb-14">
              {/* Image */}
              <div className="h-[370px] w-full rounded-lg border mb-5 shadow-xl">
                <img className="rounded-lg w-full h-full object-top object-cover" src={rental} alt="" />
              </div>
              {/* Web description */}
              <div className="h-[370px] w-full">
                <h3 className="uppercase text-lg font-semibold text-center mt-5 mb-2">
                  CAR RENTAL
                </h3>
                <p className="text-base text-gray-500 font-semibold text-center min-w-[230px] mx-auto sm:w-[300px]">
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
                <div className="flex justify-center items-center mt-5  min-w-[230px] mx-auto sm:w-[300px]">
                  <span className="shadow-lg border bg-white w-24 mr-1 text-center rounded-md py-1">React</span>
                  <span className="shadow-lg border bg-white w-24 text-center rounded-md py-1">SCSS</span>
                </div>
                <div className="flex justify-between items-center mt-5  min-w-[230px] mx-auto sm:w-[300px]">
                  <a href="#" className="w-24 text-center py-1 text-gray-500 font-semibold cursor-pointer text-base">Code <span><i class="fa-brands fa-github text-base"></i></span></a>
                  <a href="#" className="w-24 text-center py-1 text-gray-500 font-semibold cursor-pointer text-base">Live</a>
                </div>
              </div>
            </div>
            <div className="min-w-[286px] h-[725px] mx-auto shadow-xl rounded-xl border p-5 lg:flex lg:h-[410px] lg:bg-gray-50 mb-14">
              {/* Image */}
              <div className="h-[370px] w-full rounded-lg border mb-5 shadow-xl">
                <img className="rounded-lg w-full h-full object-top object-cover" src={rental} alt="" />
              </div>
              {/* Web description */}
              <div className="h-[370px] w-full">
                <h3 className="uppercase text-lg font-semibold text-center mt-5 mb-2">
                  CAR RENTAL
                </h3>
                <p className="text-base text-gray-500 font-semibold text-center min-w-[230px] mx-auto sm:w-[300px]">
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
                <div className="flex justify-center items-center mt-5  min-w-[230px] mx-auto sm:w-[300px]">
                  <span className="shadow-lg border bg-white w-24 mr-1 text-center rounded-md py-1">React</span>
                  <span className="shadow-lg border bg-white w-24 text-center rounded-md py-1">SCSS</span>
                </div>
                <div className="flex justify-between items-center mt-5  min-w-[230px] mx-auto sm:w-[300px]">
                  <a href="#" className="w-24 text-center py-1 text-gray-500 font-semibold cursor-pointer text-base">Code <span><i class="fa-brands fa-github text-base"></i></span></a>
                  <a href="#" className="w-24 text-center py-1 text-gray-500 font-semibold cursor-pointer text-base">Live</a>
                </div>
              </div>
            </div>
            <div className="min-w-[286px] h-[725px] mx-auto shadow-xl rounded-xl border p-5 lg:flex lg:h-[410px] lg:bg-gray-50 mb-14">
              {/* Image */}
              <div className="h-[370px] w-full rounded-lg border mb-5 shadow-xl">
                <img className="rounded-lg w-full h-full object-top object-cover" src={rental} alt="" />
              </div>
              {/* Web description */}
              <div className="h-[370px] w-full">
                <h3 className="uppercase text-lg font-semibold text-center mt-5 mb-2">
                  CAR RENTAL
                </h3>
                <p className="text-base text-gray-500 font-semibold text-center min-w-[230px] mx-auto sm:w-[300px]">
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
                <div className="flex justify-center items-center mt-5  min-w-[230px] mx-auto sm:w-[300px]">
                  <span className="shadow-lg border bg-white w-24 mr-1 text-center rounded-md py-1">React</span>
                  <span className="shadow-lg border bg-white w-24 text-center rounded-md py-1">SCSS</span>
                </div>
                <div className="flex justify-between items-center mt-5  min-w-[230px] mx-auto sm:w-[300px]">
                  <a href="#" className="w-24 text-center py-1 text-gray-500 font-semibold cursor-pointer text-base">Code <span><i class="fa-brands fa-github text-base"></i></span></a>
                  <a href="#" className="w-24 text-center py-1 text-gray-500 font-semibold cursor-pointer text-base">Live</a>
                </div>
              </div>
            </div>
            <div className="min-w-[286px] h-[725px] mx-auto shadow-xl rounded-xl border p-5 lg:flex lg:h-[410px] lg:bg-gray-50 mb-14">
              {/* Image */}
              <div className="h-[370px] w-full rounded-lg border mb-5 shadow-xl">
                <img className="rounded-lg w-full h-full object-top object-cover" src={rental} alt="" />
              </div>
              {/* Web description */}
              <div className="h-[370px] w-full">
                <h3 className="uppercase text-lg font-semibold text-center mt-5 mb-2">
                  CAR RENTAL
                </h3>
                <p className="text-base text-gray-500 font-semibold text-center min-w-[230px] mx-auto sm:w-[300px]">
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
                <div className="flex justify-center items-center mt-5  min-w-[230px] mx-auto sm:w-[300px]">
                  <span className="shadow-lg border bg-white w-24 mr-1 text-center rounded-md py-1">React</span>
                  <span className="shadow-lg border bg-white w-24 text-center rounded-md py-1">SCSS</span>
                </div>
                <div className="flex justify-between items-center mt-5  min-w-[230px] mx-auto sm:w-[300px]">
                  <a href="#" className="w-24 text-center py-1 text-gray-500 font-semibold cursor-pointer text-base">Code <span><i class="fa-brands fa-github text-base"></i></span></a>
                  <a href="#" className="w-24 text-center py-1 text-gray-500 font-semibold cursor-pointer text-base">Live</a>
                </div>
              </div>
            </div>
            

            
            
            
          </div>
        </div>
      </section>
      {/* === ABOUT SECTION === */}
      {/* <About /> */}
      <section className="bg-gray-50 py-10 h-fit">
        <div className="w-[90%] mx-auto sm:w-[600px] lg:w-[900px]">
          <div className="">
            <h2 className="text-4xl text-blue-500 uppercase font-extrabold my-3 text-center">About Me</h2>
            <h3 className="text-base font-normal text-gray-500 mb-3 text-center">
            A dedicated Front-end Developer based in Belgrade, Serbia 📍
            </h3>
          </div>
          <div className="lg:flex lg:justify-between lg:items-center">
            {/* Image */}
            <div className="min-w-[286px] mx-auto rounded-lg mt-10 mb-10 sm:w-[450px]">
              <img className="w-full h-full rounded-lg" src="src/assets/images/bg.jpeg" alt="" />
            </div>
            {/* Text */}
            <div className="min-w-[286px] text-gray-500 text-base font-normal mt-5 mx-auto text-center lg:w-[350px] lg:text-left">
            As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
            </div>
          </div>
        </div>
      </section>
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
