import React from "react";
import { useLocation } from "react-router-dom";
import mtlLogo from "../assets/MTL Logo.jpg";
import { navigation } from "../constants/index.js";

export const Header = () => {
  const pathname = useLocation();
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-10 backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a href="#mtl" className="block w-[12rem] xl:mr-8">
          <img src={mtlLogo} alt="MTL" width={190} height={20} />
        </a>

        <nav className="hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-amber-200 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`#${item.url}`}
                className={`block px-4 py-2 text-lg text-gray-700 transition-colors hover:text-gray-900 lg:mr-6 lg:p-0 ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-red-900"
                    : "lg:text-gray-700"
                }`}
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
