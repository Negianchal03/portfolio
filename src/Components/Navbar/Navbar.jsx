import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react'

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

     <ul
  className={`${menu ? "block" : "hidden"}      
   mx-0 w-full md:w-auto py-2 mt-4 font-semibold md:5 
   bg-black px-2 rounded-xl bg-opacity-30 
   md:border-none text-center md:bg-transparent 
   md:static md:mx-0 md:flex gap-6 md:ml-auto`}
>

        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:0 cursor-pointer">
            About
          </li>
        </a>

        <a href="#Skills">
          <li className="text-md transition-all duration-300 p-1 md:0 cursor-pointer">
            Skills
          </li>
        </a>

        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:0 cursor-pointer">
            Projects
          </li>
        </a>

        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-1 md:0 cursor-pointer">
            Contact
          </li>
        </a>
      </ul>

      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => {
            openMenu(false);
            setShowmenu(true);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
