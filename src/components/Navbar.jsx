import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-50 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />

          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Ashvin Shakya &nbsp;
            <span className="sm:block hidden">| Student</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          <li>
            <a
              href="https://github.com/Ashvin-Shakya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white text-[18px] font-medium"
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/ashvin-shakya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white text-[18px] font-medium"
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a
              href="https://drive.google.com/file/d/17m7CfJjU-0At1P3_-4jLpysPCBmb0tSA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white text-[18px] font-medium"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              <li>
                <a
                  href="https://github.com/Ashvin-Shakya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white text-[16px]"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/ashvin-shakya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white text-[16px]"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://drive.google.com/file/d/17m7CfJjU-0At1P3_-4jLpysPCBmb0tSA/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white text-[16px]"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;