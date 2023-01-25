import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import UseDarkmode from "./useDarkmode";
import { motion } from "framer-motion";

function MobileNav() {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  const list = [
    {
      id: 1,
      text: "ABOUT",
      path: "/"
    },
    {
      id: 2,
      text: "SKILLS/TOOLS",
      path: "/skills"
    },
    {
      id: 3,
      text: "PROJECTS",
      path: "/projects"
    },
    {
      id: 4,
      text: "CONTACT",
      path: "contact"
    },
    {
      id: 5,
      icon: <UseDarkmode />
    }
  ]

  const sidebar = {
       open: {
        opacity: 3,
      },
      closed: {
        opacity: 0.2,
        transistion: { delay: 1.5, duration: 1.5 },
      },
      exit: {
        opacity: 1,
        transistion: { ease: "easeInOut" },
      },
  }

  const listAnimate = {
    hover: {
      scale: 1.2,
      textShadow: "0px 0px 8px rgb(255, 255, 255)",
    },
    transistion: {
      type: "spring",
      stiffness: 300,
      delay: 0.5,
    },
  };

  return (
    <div className="w-[100%] h-[80px] z-10">
      <div className="flex justify-between items-center pt-4 p-2">
        <h1 className="font-[700] text-[24px] leading-[30.62px] text-secondary">
          <Link
            to="/"
            className="cursor-pointer dark:text-white text-secondary"
          >
            PreshDev
          </Link>
        </h1>

        <div onClick={handleClick}>
          {!nav ? (
            <HiOutlineMenuAlt3 className="text-[38px] cursor-pointer dark:text-white text-secondary" />
          ) : (
            <CgClose className="hidden" />
          )}
        </div>
      </div>

      <motion.ul
        variants={sidebar}
        initial="open"
        exit="exit"
        animate={ nav ? "open" : "closed"}
        className={
          !nav
            ? "hidden"
            : "right-[0px] w-[50%] p-2 h-full fixed bg-grey2 dark:bg-secondary top-0 z-10 transition-all duration-300 drop-shadow-lg"
        }
      >

        <div className="ml-auto pt-2 w-[40px]">
          <CgClose
            onClick={handleClose}
            className="text-[38px] cursor-pointer dark:text-white text-[red] transition-colors duration-300"
          />
        </div>

        
        {
          list.map(({id, text, path, icon}) => {
            return (
              <motion.li
                variants={listAnimate}
                whileHover="hover"
                key={id}
                className="cursor-pointer font-[500] text-[#292929] dark:text-white mt-16 text-center "
              >
                <Link onClick={handleClose} to={path}>
                  {text}
                </Link>
                {icon}
              </motion.li>
            );
          })
        }
      </motion.ul>
    </div>
  );
}

export default MobileNav;
