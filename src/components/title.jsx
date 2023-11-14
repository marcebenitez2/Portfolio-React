import React from "react";

function Title() {
  return (
    <div className="w-full py-20 flex flex-col text-[#D1D5D8] leading-none">
      <div className="flex items-center">
        <div className="title_hero hover:text-orange-400">FULL</div>
        <div className="w-52 border-b-2 h-1 title_hero hover:border-b-orange-400" />
        <div className="title_hero hover:text-orange-400">STACK</div>
      </div>
      <div>
        <div className="title_hero pl-10 hover:text-orange-400">DEVELOPER</div>
      </div>
    </div>
  );
}

export default Title;
