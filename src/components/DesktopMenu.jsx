import React from "react";
import { CgChevronDown } from "react-icons/cg";

const DesktopMenu = ({ menu }) => {
  // Checking if the menu has a sub menu
  const hasSubMenu = menu?.subMenu?.length > 0;
  return (
    <li className="relative group flex-center text-primary text-[15px] font-bold">
      {hasSubMenu ? (
        <div className="flex-center gap-1 cursor-pointer px-3 py-1 rounded-xl hover:bg-white/70 hover:text-primary transition-all duration-300 ease-in-out">
          <span>{menu.title}</span>
          <CgChevronDown className="text-xl mt-[0.6px] group-hover:rotate-180 duration-200" />
        </div>
      ) : (
        <a
          href={menu.url}
          className="flex-center gap-1 px-3 py-1 rounded-xl hover:bg-white/70 hover:text-primary transition-all duration-300 ease-in-out"
        >
          {menu.title}
        </a>
      )}

      {/* Dropdown */}
      {hasSubMenu && (
        <ul className="sub-menu hidden group-hover:block bg-white shadow-lg  mt-2 whitespace-nowrap overflow-hidden z-10">
          {menu.subMenu.map((subMenuItem, i) => (
            <li key={i} className="px-4 py-2 hover:bg-gray-100">
              <a href={subMenuItem.url}>
                <div className="text-gray-800">{subMenuItem.title}</div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
export default DesktopMenu;
