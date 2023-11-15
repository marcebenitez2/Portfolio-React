import logo from "../assets/logoCircular.png";

function FooterHero() {
  return (
    <div>
      <img src={logo} className="absolute w-28 left-4 bottom-8 logo smn:w-20" />
      <div className="absolute right-6 text-white bottom-1 text-lg text-right">
        <h3 className="font-semibold text-orange-400"><a href="#contacto">Hablemos!</a></h3>
        <h3 className="font-semibold">En busqueda laboral</h3>
      </div>
    </div>
  );
}

export default FooterHero;
