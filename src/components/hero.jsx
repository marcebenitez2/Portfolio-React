import React from "react";
import flecha from '../assets/arrow-down.png'

function Hero() {
  return (
    <section className="h-screen w-full flex flex-col items-center text-center py-52 justify-between">
      <div>
        <h3 className="text-4xl mdn:text-4xl">Marcelo Benitez</h3>
        <h1 className="text-9xl font-semibold mdn:text-7xl">Fullstack</h1>
        <h1 className="text-[#ff0080] text-8xl mdn:text-6xl">Developer</h1>
      </div>
      <img src={flecha} className="w-20 animate-bounce animate-infinite animate-duration-[1500ms]"/>
    </section>
  );
}

export default Hero;
