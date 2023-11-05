import React from "react";
import { projects } from "../services/arrays";
import preview1 from "../assets/preview1.png";
import preview2 from "../assets/preview2.png";
import preview3 from "../assets/preview3.png";
import techImages from "../services/techImages";

function Experience() {
  return (
    <section className="w-full h-screen flex flex-col gap-12 py-12 lgn:h-full">
      <h3 className="text-6xl font-semibold mdn:text-4xl">Experiencia</h3>
      <div className="w-full h-full flex flex-col items-center gap-1 lgn:gap-8">
        {projects.map((x) => (
          <div className="w-full h-full flex gap-24 mdn:gap-6" key={x.id}>
            <div className="flex flex-col items-center">
              <span className="circulos w-14 h-20 flex justify-center items-center rounded-full text-white">
                {x.id}
              </span>
              <span className="h-full w-px bg-custom-fuxia-light" />
            </div>
            <div className="w-full flex gap-12 lgn:flex-col lgn:gap-4">
              <img
                src={x.id === 1 ? preview1 : x.id === 2 ? preview2 : preview3}
                alt=""
                className="w-72 h-44 mdn:w-60 mdn:h-36 lgn:h-60 lgn:w-96 card"
              />
              <div className="flex flex-col">
                <h3 className={x.style}>{x.nombre}</h3>
                <p className="w-5/6 lgn:w-full mdn:text-sm">{x.descripcion}</p>
                <div className="flex gap-4">
                  {x.tecnologias.map((y, index) => (
                    <img
                      src={techImages[y]}
                      className="w-10 "
                      alt={`Tecnología ${index + 1}`}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
