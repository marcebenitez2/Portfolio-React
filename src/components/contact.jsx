import React from "react";
import logoInstagram from "../assets/instagram.png";
import logoLinkedin from "../assets/linkedin.png";
import logoGithub from "../assets/github.png";

function Contact() {
  const email = "marcebenitez0607@gmail.com";
  const phoneNumber = "+51 341 569 0470";

  return (
    <div className="w-full flex flex-col mt-20 gap-4" id="contacto">
      <h1 className="about_title">CONTACTAME</h1>
      <h3 className="text-xl mdn:text-base">
        SI TIENES ALGUNA CONSULTA NO DUDES EN CONTACTAR:
      </h3>
      <h3 className="text-2xl font-semibold text-orange-400 mdn:text-lg">
        <a href={`mailto:${email}`}> {email}</a>
      </h3>
      <h3 className="text-2xl font-semibold text-orange-400 mdn:text-lg">
        +51 341 569 0470
      </h3>
      <div className="w-full flex pl-24 justify-center gap-8 items-center lgn:flex-row lgn:pl-0">
        <a
          href="https://github.com/marcebenitez2"
          target="_blank"
          className="w-32 zoom"
        >
          <img src={logoGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/benitez-marcelo/"
          target="_blank"
          className="w-32 zoom"
        >
          <img src={logoLinkedin} />
        </a>
        <a
          href="https://instagram.com/marcebenitezz_?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          className="w-32 zoom"
        >
          <img src={logoInstagram} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
