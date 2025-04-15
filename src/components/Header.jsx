import React from "react";
import { useLocation } from "react-router-dom";
import mtlLogo from "../assets/MTL Logo.jpg";
import { navigation } from "../constants/index.js";

export const Header = () => {
  const pathname = useLocation();

  return (
    <div className="fixed top-0 left-0 right-0 bg-amber-400/90 shadow-md p-3 z-10 backdrop-blur-sm">
      <div className="flex items-center px-4 lg:px-7.5 xl:px-10 max-lg:py-3">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src={mtlLogo} alt="MTL" width={190} height={20} />
        </a>
        <nav classname="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-amber-400 md:static md:flex md:mx-auto md:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto md:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative text-2xl uppercase text-gray-700 transition-colors hover:text-blue-900 mx-3 px-2 py-4 md:my-8 lg:-mr-0.25 md:text-sm ${
                  pathname.hash === item.url
                    ? "text-blue-900 font-bold border-b-4 border-blue-900"
                    : ""
                } md:leading-4`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};
