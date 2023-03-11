import "./App.css";
import { useState } from "react";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import Stack from "./components/sectionStack/Stack";
import About from "./components/about/About";
import rental from "./assets/images/car-rental.webp";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      {/* === HEADER SECTION === */}
      <Header isOpen={isOpen} toggle={toggle} />
      {/* === HERO SECTION === */}
      <Hero />
      {/* === TECH STACK SECTION === */}
      <Stack />
      {/* === ABOUT SECTION === */}
      <About />
      {/* === PROJECTS & PORTFOLIO === */}
      <section className="projects" id="projects">
        <div className="projects__wrapper">
          <div className="projects__text-block">
            <h3 className="project__sm-text">Portfolio</h3>
            <h3 className="project__text">
              Each project is a unique piece of development
            </h3>
          </div>
          <div className="projects__buttons-block">
            <div className="projects__buttons">
              <button className="projects__button">
                <a href="#" className="project__link">
                  Laravel
                </a>
              </button>
            </div>
            <div className="projects__buttons">
              <button className="projects__button">
                <a href="#" className="project__link">
                  PHP
                </a>
              </button>
            </div>
            <div className="projects__buttons">
              <button className="projects__button project__button--hover">
                <a href="#" className="project__link">
                  ReactJs
                </a>
              </button>
            </div>
            <div className="projects__buttons">
              <button className="projects__button">
                <a href="#" className="project__link">
                  Javascript
                </a>
              </button>
            </div>
            <div className="projects__buttons">
              <button className="projects__button">
                <a href="#" className="project__link">
                  WordPress
                </a>
              </button>
            </div>
            <div className="projects__buttons">
              <button className="projects__button">
                <a href="#" className="project__link">
                  Shopify
                </a>
              </button>
            </div>
          </div>
          <div className="projects__cards">
            <div className="projects__card">
              <div className="projects__card--img">
                <img src={rental} alt="" />
              </div>
              <div className="projects__card--text">
                <h3 className="projects__card--title">Here the title</h3>
                <p className="projects__card--description">
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
                <div className="projects__card--btns">
                  <button className="projects__card--btn">React</button>
                  <button className="projects__card--btn">SCSS</button>
                </div>
                <div className="projects__card--links">
                  <span className="projects__card--span">
                    <a href="#">Code</a>
                  </span>
                  <span className="projects__card--span">
                    <a href="#">Live Demo</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="projects__card">
              <div className="projects__card--img">
                <img src={rental} alt="" />
              </div>
              <div className="projects__card--text">
                <h3 className="projects__card--title">Here the title</h3>
                <p className="projects__card--description">
                  A car rental website is an online platform that allows users
                  to rent cars for personal or business use. The website
                  provides an interface for searching, comparing, and reserving
                  cars.
                </p>
                <div className="projects__card--btns">
                  <button className="projects__card--btn">React</button>
                  <button className="projects__card--btn">SCSS</button>
                </div>
                <div className="projects__card--links">
                  <span className="projects__card--span">
                    <a href="#">Code</a>
                  </span>
                  <span className="projects__card--span">
                    <a href="#">Live Demo</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact">
        <div className="contact__wrapper">
          <div className="contact__block">
            <h3 className="contact__block--title">CONTACT</h3>
            <h3 className="contact__block--description">
              Don't be shy! Hit me up!
            </h3>
          </div>
          <div className="contact__icons">
            <div className="contact__block--icons">
              <div className="contact__block--icon">
                <div className="contact__block--icon-map">
                  <i className="fa-solid fa-street-view"></i>
                </div>
                <div className="contact__block--icon-text">
                  <h4>Prague, Czech Republic</h4>
                </div>
              </div>

              <div className="contact__block--icon">
                <div className="contact__block--icon-map">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="contact__block--icon-text">
                  <h4>kambacharles11@gmail.com</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__text">
            Copyright 2023. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
