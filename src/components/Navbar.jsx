import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navLinks = [
    "About",
    "Skills",
    "Projects",
    "Certifications",
    "Resume",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0f172a]/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">

        {/* LOGO */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl md:text-3xl font-bold cursor-pointer"
        >
          <span className="text-white">
            Gnana
          </span>
          <span className="text-purple-500">
            Sai
          </span>
        </motion.h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 text-sm font-medium items-center">
          {navLinks.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ y: -2 }}
              className="cursor-pointer relative group"
            >
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
              >
                {item}
              </Link>

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}

          <ThemeToggle />
        </ul>

        {/* MOBILE */}
        <div className="flex items-center gap-5 md:hidden">
          <ThemeToggle />

          <div className="text-3xl cursor-pointer">
            {menuOpen ? (
              <HiX
                onClick={() =>
                  setMenuOpen(false)
                }
              />
            ) : (
              <HiMenuAlt3
                onClick={() =>
                  setMenuOpen(true)
                }
              />
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="md:hidden bg-[#111827] py-6"
        >
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() =>
                    setMenuOpen(false)
                  }
                  className="cursor-pointer text-lg"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;