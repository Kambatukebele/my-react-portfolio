import "./App.css";
import { useState } from "react";
import Navigation from "./components/navigation/Navigation"
import Header from "./components/header/Header";
import Stack from "./components/stack/Stack";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";


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
      <Contact />
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
