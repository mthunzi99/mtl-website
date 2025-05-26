import React from "react";
import { CgChevronDown, CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";
import { motion } from "framer-motion";

const MobileMenu = ({ menu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };
  //   Toggle submenu item
  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <motion.button
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-20%" }}
        onClick={toggleDrawer}
        className="text-2xl font-medium cursor-pointer"
      >
        {isOpen ? <CgClose /> : <CgMenu />}
      </motion.button>

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        className="fixed top-16 left-0 right-0 h-full overflow-y-auto bg-secondary backdrop-blur p-6 transition-transform duration-300 ease-in-out transform-gpu"
      >
        <ul>
          {menu?.map(({ title, subMenu }, i) => {
            const hasSubMenu = subMenu?.length > 0;
            const isClicked = clicked === i;
            return (
              <li key={i} className="group border-b-4 border-white/20">
                <span
                  onClick={() => setClicked(isClicked ? null : i)}
                  className="flex-center-between gap-2 text-2xl font-medium p-4 hover:bg-white/75 rounded-lg cursor-pointer relative"
                >
                  {title}
                  {hasSubMenu && (
                    <CgChevronDown
                      className={`text-xl mt-[0.6px] transition-all ${
                        isClicked && "rotate-180 duration-200"
                      }`}
                    />
                  )}
                </span>
                {hasSubMenu && isClicked && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-4 whitespace-nowrap overflow-hidden z-10"
                  >
                    {subMenu.map((subMenuItem, j) => (
                      <li
                        key={j}
                        className="text-lg border-b-1 px-4 py-2 rounded-lg hover:bg-white/75"
                      >
                        <a href={subMenuItem.url}>
                          <div>{subMenuItem.title}</div>
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
