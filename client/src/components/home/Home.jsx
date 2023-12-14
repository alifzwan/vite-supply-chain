import React from 'react'

import Navbar from "../home/homepage/navbar/Navbar";
import Hero from "../home/homepage/hero/Hero";

import AboutNavBar from "../home/about/aboutNavbar/AboutNavBar";
import About from "../home/about/About";

import AboutBotBar from "../home/about/aboutBotbar/AboutBotBar";
import Frameworks from "../home/frameworks/Frameworks";
import Credits from "../home/credits/Credits";


export const Home = () => {
  return (
    <div id='Home'>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section id="About Me">
        <AboutNavBar />
        <About />
        <AboutBotBar /> 
      </section>

      <section id="Frameworks">
        <Frameworks />
        <Credits />
      </section>
    </div>
    

  )
}

export default Home;
