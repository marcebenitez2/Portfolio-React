import React from "react";
import fotoYO from "../assets/fotoYo.jpg";

function AboutMe() {
  return (
    <div className="w-full pt-16 flex flex-col gap-4">
      <h2 className="about_title hover:text-orange-400">SOBRE MI</h2>
      <div className="flex lgn:flex-col-reverse lgn:gap-10">
        <div className="text-2xl font-thin leading-normal w-full basis-full pr-24">
          <h2 className="hover:text-orange-400">
            ¡Hola, soy un apasionado desarrollador de software FullStack! Mi
            especialidad es crear aplicaciones web robustas y escalables. Mi
            enfoque principal es proporcionar soluciones tecnológicas
            innovadoras y centradas en el usuario.
          </h2>
          <h2 className="hover:text-orange-400">
            Me encanta aprender y experimentar con nuevas tecnologías y
            metodologías para estar siempre actualizado en este mundo en
            constante evolución.
          </h2>
          <h2 className="hover:text-orange-400">
            Obtuve mi título como desarrollador en el Instituto Belgrano, donde
            adquirí conocimientos sólidos que ahora aplico en mi carrera
            profesional.
          </h2>
          <h2 className="hover:text-orange-400">
            Fuera del código, soy un chico tranquilo que disfruta yendo al
            gimnasio, escuchando música y viendo anime. Creo que equilibrar la
            vida profesional con actividades que disfruto es esencial para un
            desarrollo integral.
          </h2>
          <div className="mt-4">
            <h2>
              <span className="font-semibold">Localidad: </span>Rosario, Santa
              Fe, Argentina
            </h2>
            <h2>
              <span className="font-semibold">Edad: </span>21 años
            </h2>
            <h2>
              <span className="font-semibold">Inglés: </span>Nivel básico
            </h2>
          </div>
        </div>
        <div className="flex basis-1/3 lgn:basis-full lgn:m-auto">
          <img src={fotoYO} className="foto_mia" alt="Mi foto" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
