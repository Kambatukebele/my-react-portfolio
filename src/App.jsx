import "./App.css";
import { useState } from "react";
import Navigation from "./components/navigation/Navigation"
import Header from "./components/header/Header";
import Stack from "./components/stack/Stack";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


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
      <Footer />
    </div>
  );
}

export default App;
