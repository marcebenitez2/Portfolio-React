// Projects.js

import React from "react";
import preview1 from "../assets/preview1.png";
import preview2 from "../assets/preview2.png";
import preview4 from "../assets/preview4.png";
// import "./Projects.css"; // Asegúrate de importar el archivo CSS

function Projects() {
  return (
    <div className="w-full flex flex-col gap-6 mb-10">
      <h2 className="about_title hover:text-orange-400">EXPERIENCIA</h2>
      <div className="flex flex-col px-20 gap-40">
        <div className="flex gap-32 xln:px-10 xln:gap-10 lgn:flex-col lgn:px-10 mdn:px-0">
          <article className="w-full flex flex-col gap-6">
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
                paleta de colores que se adapta a cualquier tipo de sticker. El
                sitio utiliza Firebase como base de datos y autenticación para
                el administrador. El proyecto se realizó en NextJS y
                TailwindCSS.
              </p>
            </div>
          </article>
          <article className="w-full flex flex-col gap-6">
            <a href="https://sanmiguelarcangel.vercel.app/">
              <img src={preview2} className="zoom" alt="Project 2" />
            </a>
            <div>
              <h3 className="title_project text-red-600">
                <a href="https://sanmiguelarcangel.vercel.app/">SCOUTSOFT</a>
              </h3>
              <p className="mdn:text-base">
                Sistema de administracion para grupos scouts. El sistema cuenta
                con usuarios, roles, gestion de beneficiarios, gestion de
                inventario como tambien de calendario, etc. El proyecto se
                realizo con node para el lado del servidor y React para el lado
                del cliente. Ademas contiene practica de arquitectura MVC.
              </p>
            </div>
          </article>
        </div>
        <article className="w-full h-96 flex flex-col items-center justify-center gap-6">
          <a href="https://next-js-supabase-chat-app.vercel.app/">
            <img
              src={preview4}
              className="zoom h-96 rounded-2xl"
              alt="Project 4"
            />
          </a>
          <h3 className="title_project text-rose-600">
            <a href="https://next-js-supabase-chat-app.vercel.app/">CHATAPP</a>
          </h3>
          <p className="px-60">
            Aplicación de chat en tiempo real con un diseño intuitivo y
            atractivo, desarrollada utilizando NextJS y Supabase. La interfaz
            minimalista se complementa con una paleta de colores versátil que se
            adapta perfectamente a cualquier tipo de sticker. Durante el
            desarrollo, se hizo uso de TailwindCSS y los RSC de Shadcn para
            garantizar una apariencia moderna y agradable. La integración de
            NextJS proporciona una experiencia de usuario fluida, mientras que
            Supabase se encarga de la gestión de la base de datos y la
            autenticación, asegurando una plataforma segura y eficiente.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Projects;
