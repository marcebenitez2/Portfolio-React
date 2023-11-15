import React from "react";
import logo from "../assets/logoCircular.png";

function FooterHero() {
  return (
    <div>
      <img src={logo} className="absolute w-28 left-4 bottom-8 logo" />
      <div className="absolute right-6 text-white bottom-1 text-lg text-right">
        <h3>Terminando carrera</h3>
        <h3>En busqueda laboral</h3>
        <h3>Hablemos!</h3>
      </div>
    </div>
  );
}

export default FooterHero;
