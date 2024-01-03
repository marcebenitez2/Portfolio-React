// Projects.js

import React from "react";
import preview1 from "../assets/preview1.png";
import preview2 from "../assets/preview2.png";
// import "./Projects.css"; // Asegúrate de importar el archivo CSS

function Projects() {
  return (
    <div className="w-full flex flex-col  gap-6">
      <h2 className="about_title hover:text-orange-400">EXPERIENCIA</h2>
      <div className="flex gap-32 px-20 xln:px-10 xln:gap-10 lgn:flex-col lgn:px-10 mdn:px-0">
        <div className="w-full flex flex-col gap-6">
          <a
            href="https://calcos-ecommerce-main.vercel.app/store"
            target="_blank"
          >
            <img src={preview1} className="zoom" alt="Project 1" />
          </a>
          <div>
            <h3 className="title_project text-yellow-400 ">
              <a
                href="https://calcos-ecommerce-main.vercel.app/store"
                target="_blank"
              >
                VESTICKS
              </a>
            </h3>
            <p className="mdn:text-base">
              Tienda concepto de stickers, con un diseño minimalista y una
              paleta de colores que se adapta a cualquier tipo de sticker. El sitio utiliza Firebase como base de datos y autenticación para el administrador. El proyecto se realizó en NextJS y TailwindCSS.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <a>
            <img src={preview2} className="zoom" alt="Project 2" />
          </a>
          <div>
            <h3 className="title_project text-red-600">
              <a href="https://sanmiguelarcangel.vercel.app/">SCOUTSOFT</a>
            </h3>
            <p className="mdn:text-base">
              Sistema de administracion para grupos scouts. El sistema cuenta
              con usuarios, roles, gestion de beneficiarios, gestion de
              inventario como tambien de calendario, etc. El proyecto se realizó
              con React, PHP y MySQL como base de datos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
