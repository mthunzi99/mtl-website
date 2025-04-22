import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import mtlLogo from "../assets/MTL Logo.jpg";
import { navigation } from "../constants/index.js";
import { CgMenu, CgClose } from "react-icons/cg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

export const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();

    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 shadow-md p-3 z-10 ${
        openNavigation ? "bg-amber-400/90" : "bg-amber-400 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-4 md:px-7.5 lg:px-10 max-md:py-3">
        <a href="#hero" className="block w-[12rem] md:mr-8">
          <img src={mtlLogo} alt="MTL" width={190} height={20} />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[6.5rem] left-0 right-0 bottom-0 bg-gradient-to-b from-amber-400/90 via-amber-200 to-amber-400 md:bg-none md:static md:flex md:mx-auto md:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto md:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
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
        <button className="ml-auto md:hidden px-3 text-2xl text-gray-700 hover:text-blue-900 focus:outline-none">
          {openNavigation ? (
            <CgClose
              className="transition opacity-100 duration-300"
              onClick={toggleNavigation}
            />
          ) : (
            <CgMenu
              className="transition opacity-100 duration-300"
              onClick={toggleNavigation}
            />
          )}
        </button>
      </div>
    </div>
  );
};
