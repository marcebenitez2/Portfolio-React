import React from "react";

function Stack() {
  return (
    <section className="w-full h-screen flex flex-col py-12 gap-4">
      <h3 className="text-6xl font-semibold mdn:text-4xl">Conocimientos</h3>
      <div className="w-full flex h-full">
        <div className="w-full flex flex-col">
          {/* Espacio para imagen titulo */}
          <h3 className="text-3xl font-semibold relative inline text-black">
            <span className="bg-custom-fuxia-light px-2 rounded">
              Soft Skills
            </span>
          </h3>
        </div>
        <div className="w-full flex flex-col">
          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold relative inline text-black">
              <span className="bg-custom-fuxia-light px-2 rounded">
                Stack Frontend
              </span>
            </h3>
            <div></div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold relative inline text-black">
              <span className="bg-custom-fuxia-light px-2 rounded">
                Stack Backend
              </span>
            </h3>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;
