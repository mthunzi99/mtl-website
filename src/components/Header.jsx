import React from "react";
import mtlLogo from "../assets/MTL Logo.jpg";

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-10 backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#mtl" className="block w-[12rem] xl:mr-8">
          <img src={mtlLogo} alt="MTL" width={190} height={20} />
        </a>

        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-amber-200 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center m-auto lg:flex-row">
            1 2 3 4
          </div>
        </nav>
      </div>
    </div>
  );
};
