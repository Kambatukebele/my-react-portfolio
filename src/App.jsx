import "./App.css";
import { useState } from "react";

import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Header isOpen={isOpen} toggle={toggle} />
      <Hero />
      <section className="stack">
        <div className="stack__wrapper">
          <div className="stack__lists">
            <div className="stack__list">
              <i className="fa-brands fa-laravel"></i>
            </div>
            <div className="stack__list">
              <i class="fa-brands fa-php"></i>
            </div>
            <div className="stack__list">
              <i class="fa-brands fa-react"></i>
            </div>
            <div className="stack__list">
              <i class="fa-brands fa-square-js"></i>
            </div>
            <div className="stack__list">
              <i class="fa-brands fa-css3"></i>
            </div>
            <div className="stack__list">
              <i class="fa-brands fa-html5"></i>
            </div>
            <div className="stack__list">
              <i class="fa-brands fa-wordpress"></i>
            </div>
            <div className="stack__list">
              <i class="fa-brands fa-shopify"></i>
            </div>
            <div className="stack__list">
              <i class="fa-brands fa-sass"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
