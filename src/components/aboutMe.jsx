import React from "react";

function AboutMe() {
  return (
    <div className="w-full pt-16 flex flex-col gap-4">
      <h2 className="about_title hover:text-orange-400">SOBRE MI</h2>
      <div className="text-2xl font-thin leading-normal	">
        <h2>
          Soy un apasionado desarrollador de Software FullStack especializado en
          crear aplicaciones web robustas y escalables.
        </h2>
        <h2>
          Mi enfoque principal radica en proporcionar soluciones tecnológicas
          innovadoras y centradas en el usuario.
        </h2>
        <h2>
          Me encanta aprender y experimentar con nuevas tecnologias y
          metodologias
        </h2>
        <h2>
          Fuera del codigo soy un chico tranquilo que va al gimnasio, escucha
          musica y mira anime
        </h2>
      </div>
    </div>
  );
}

export default AboutMe;
