import React from "react";

function About() {
  return (
    <section className="h-screen w-full">
      <div className="degrade"></div>
      <div className="text-container">
        <h3 className="text-6xl font-semibold mdn:text-4xl">Sobre mi</h3>
        <p className="w-3/5 mdn:w-4/5 text-lg text-center">
          ¡Hola! Soy <span className="text-[#ff0080]">Marcelo</span>, un apasionado
          desarrollador de software con tres años de experiencia. Graduado del
          Instituto Belgrano, me considero un autodidacta en constante
          crecimiento.
        </p>
        <p className="w-3/5 mdn:w-4/5 text-lg text-center">
          Mi enfoque se centra en crear aplicaciones eficaces y eficientes,
          siempre teniendo en cuenta la experiencia del usuario. Creo que la
          tecnología debe simplificar la vida de las personas y mejorar sus
          experiencias diarias. <br />
          Destaco la frase{" "}
          <span className="text-[#ff0080]">
            "Si puedes imaginarlo, puedes programarlo"
          </span>{" "}
          (Programador ATS)
        </p>
      </div>
    </section>
  );
}

export default About;
