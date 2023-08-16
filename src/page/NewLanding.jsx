import React, { useRef, useState, useEffect } from "react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";
import One from "../components/One";
import Two from "../components/Two";
import Three from "../components/Three";
import Testimonials from "../components/Testimonials";
import heroBottom from "../assets/heroBottom.svg";
import Stats from "../components/Stats";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

export default function NewLanding() {
  return (
    <div className="font-Alata ">
      <Nav />
      <Hero />
      <img className="w-[100vw]" src={heroBottom} alt="" />
      <One />
      <Two />
      <Three />
      <Testimonials />
      <Pricing />
      <Stats />
      <Footer />

    </div>
  );
}
