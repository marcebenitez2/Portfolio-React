import React from "react";
import Navbar from "./navbar";
import Title from "./title";
import FooterHero from "./footerHero";

function Hero() {
  return (
    <section className="w-full h-screen min-h-screen flex flex-col">
      <Navbar />
      <Title />
      <FooterHero/>
    </section>
  );
}

export default Hero;
