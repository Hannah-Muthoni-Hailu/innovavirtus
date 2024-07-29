'use client';

import Image from "next/image";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Portfolio from "./_components/Portfolio";
import Services from "./_components/Services";

export default function Home() {
  return (
    <div>
      <div id="hero">
        <Hero/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="services">
        <Services/>
      </div>
      <div id="portfolio">
        <Portfolio/>
      </div>
      
    </div>
  );
}
