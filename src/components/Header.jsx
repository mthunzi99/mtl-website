import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import mtlLogo from "../assets/MTL Logo.svg";
import { navigation } from "../constants/index.js";
import { CgMenu, CgClose } from "react-icons/cg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { DesktopMenu } from "./DesktopMenu.jsx";

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
    <div>
      <header className="h-16 text-15px fixed inset-0 flex-center bg-secondary">
        <nav className="px-4 flex-center-between w-full max-w-7xl mx-auto">
          <a href="#home">
            <img
              src={mtlLogo}
              alt="MTL Logo"
              className="h-10 cursor-pointer"
              onClick={handleClick}
            />
          </a>

          {/* menus */}

          {/* Desktop Menu */}
          <ul className="md:flex lg:items-center lg:justify-center hidden text-primary gap-3">
            {navigation.map((navItem) => (
              <DesktopMenu menu={navItem} key={navItem.id} />
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};
