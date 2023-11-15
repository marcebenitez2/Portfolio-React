// Projects.js

import React from "react";
import preview1 from "../assets/preview1.png";
import preview2 from "../assets/preview2.png";
// import "./Projects.css"; // Asegúrate de importar el archivo CSS

function Projects() {
  return (
    <div className="w-full flex mt-12 gap-32 px-20">
      <div className="w-full flex flex-col gap-6">
        <a
          href="https://calcos-ecommerce-main.vercel.app/store"
          target="_blank"
        >
          <img src={preview1} className="zoom" alt="Project 1" />
        </a>
        <div>
          <h3 className="title_project text-yellow-400 titulo_zoom">
            <a
              href="https://calcos-ecommerce-main.vercel.app/store"
              target="_blank"
            >
              VESTICKS
            </a>
          </h3>
          <p>
            Tienda concepto de stickers, con un diseño minimalista y una paleta
            de colores que se adapta a cualquier tipo de sticker. El proyecto se
            realizó con NextJS, TailwindCSS y Firebase.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-6">
        <a>
          <img src={preview2} className="zoom" alt="Project 2" />
        </a>
        <div>
          <h3 className="title_project text-red-600">
            <a href="">SCOUTSOFT</a>
          </h3>
          <p>
            Sistema de administracion para grupos scouts. El sistema cuenta con
            usuarios, roles, gestion de beneficiarios, gestion de inventario
            como tambien de calendario, etc. El proyecto se realizó con React,
            PHP y Mysql.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
