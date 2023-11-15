import React from "react";
import logoInstagram from "../assets/instagram.png";
import logoLinkedin from "../assets/linkedin.png";
import logoGithub from "../assets/github.png";

function Contact() {
  return (
    <div className="w-full flex flex-col mt-20 gap-4" id="contacto">
      <h1 className="about_title">CONTACTAME</h1>
      <div className="flex lgn:flex-col lgn:gap-10">
        <form className="flex flex-col w-full">
          <h2 className="text-2xl">
            Si tienes algo en mente no dudes en comunicarte!
          </h2>
          <label className="flex flex-col">
            Nombre
            <input type="text" />
          </label>
          <label className="flex flex-col">
            Correo
            <input type="text" />
          </label>
          <label className="flex flex-col">
            Asunto
            <input type="text" />
          </label>
          <label className="flex flex-col">
            Asunto
            <textarea type="text" />
          </label>
        </form>
        <div className="w-full flex flex-col pl-24 justify-around items-center lgn:flex-row lgn:pl-0">
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
    </div>
  );
}

export default Contact;
