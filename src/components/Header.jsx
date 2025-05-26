import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import mtlLogo from "../assets/MTL Logo.svg";
import { navigation } from "../constants/index.js";
import DesktopMenu from "./DesktopMenu.jsx";
import MobileMenu from "./MobileMenu.jsx";

export const Header = () => {
  const pathname = useLocation();

  return (
    <div>
      <header className="h-18 text-[15px] fixed inset-0 flex-center bg-secondary z-9999 shadow-md">
        <nav className="px-4 flex-center-between w-full max-w-7xl mx-auto">
          <a href="#home">
            <img src={mtlLogo} alt="MTL Logo" className="h-10 cursor-pointer" />
          </a>

          {/* menus */}
          {/* Desktop Menu */}
          <ul className="lg:flex lg:items-center lg:justify-center hidden text-primary gap-3">
            {navigation.map((menu) => (
              <DesktopMenu menu={menu} key={menu.id} />
            ))}
          </ul>
          {/* Mobile Menu */}
          <div className="lg:hidden text-primary">
            <MobileMenu menu={navigation} />
          </div>
        </nav>
      </header>
    </div>
  );
};
