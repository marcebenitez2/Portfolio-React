import React from "react";

function Title() {
  return (
    <div className="container-title w-full py-20 flex flex-col text-[#D1D5D8] leading-none">
      <div className="flex items-center">
        <div className="title_hero hover:text-orange-400">FULL</div>
        <div className="title_hero hover:text-orange-400">STACK</div>
      </div>
      <div className="title_hero  hover:text-orange-400">DEVELOPER</div>
      <div className="flex gap-6 ">
        <div className="subtitle_hero text-orange-400">MARCELO</div>
        <div className="subtitle_hero text-orange-400">BENITEZ</div>
      </div>
    </div>
  );
}

export default Title;
