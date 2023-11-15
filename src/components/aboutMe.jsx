import React from "react";
import fotoYO from "../assets/fotoYO.jpg";

function AboutMe() {
  return (
    <div className="w-full pt-16 flex flex-col gap-4">
      <h2 className="about_title hover:text-orange-400">SOBRE MI</h2>
      <div className="flex">
        <div className="text-2xl font-thin leading-normal w-full basis-full ">
          <h2 className="hover:text-orange-400">
            Soy un apasionado desarrollador de Software FullStack graduado del
            instituto Belgrano, especializado en crear aplicaciones web robustas
            y escalables. Mi enfoque principal radica en proporcionar soluciones
            tecnológicas innovadoras y centradas en el usuario.
          </h2>
          <h2 className="hover:text-orange-400">
            Me encanta aprender y experimentar con nuevas tecnologias y
            metodologias.
          </h2>
          <h2 className="hover:text-orange-400">
            Fuera del codigo soy un chico tranquilo que va al gimnasio, escucha
            musica y mira anime.
          </h2>
          <div className="mt-4">
            <h2>
              <span className="font-semibold">Localidad: </span>Rosario, Santa
              Fe, Argentina
            </h2>
            <h2>
              <span className="font-semibold">Edad: </span>23
            </h2>
            <h2>
              <span className="font-semibold">Ingles: </span>Nivel basico
            </h2>
          </div>
        </div>
        <div className="flex basis-1/3">
          <img src={fotoYO} className=" foto_mia" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
