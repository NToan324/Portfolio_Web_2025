import { useState } from "react";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "../Motion/Variants";

const Header = () => {
  const [isSelected, setIsSelected] = useState("Home");

  const navLink = [
    {
      name: "Home",
      path: "home",
    },
    {
      name: "About",
      path: "about",
    },
    {
      name: "Portfolio",
      path: "portfolio",
    },
    {
      name: "Contact",
      path: "contact",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  const [navBar, setNavBar] = useState(false);

  const handleScrollSpy = () => {
    for (const item of navLink) {
      const section = document.getElementById(item.path);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setIsSelected(item.name);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const hanldeScroll = () => {
      if (window.scrollY >= 50) {
        setNavBar(true);
      } else {
        setNavBar(false);
      }
      handleScrollSpy();
    };
    window.addEventListener("scroll", hanldeScroll);
    return () => {
      window.removeEventListener("scroll", hanldeScroll);
    };
  }, []);
  return (
    <header
      className={`text-white w-full px-8 md:px-[100px] sticky top-0 z-50 custom-transition-all ${
        openMenu ? "bg-black" : "bg-[#130a26] "
      } ${navBar ? "bg-[#130a26]/40 backdrop-blur-xl" : "md:bg-[#130a26]"}`}
    >
      <motion.nav
        variants={FadeIn({
          direction: "up",
        })}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: false }}
        className="flex justify-between items-center h-16"
      >
        <div className="gradient-text font-bold text-xl">
          <Link to="about">Nhật Toàn</Link>
        </div>
        <div
          className={`md:hidden cursor-pointer transition-all duration-300 ease-in-out z-20 ${
            openMenu ? "rotate-180" : ""
          }`}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <IoClose size={30} /> : <IoMenu size={30} />}
        </div>
        <div
          className={`absolute z-10 flex flex-col justify-between items-start p-8 w-full h-[300px] left-0 bg-black transition-all duration-200 ease-in-out md:relative md:items-center md:flex md:w-auto md:h-auto md:bg-transparent md:space-x-8 md:top-0 md:py-0 md:px-0 md:space-y-0 md:flex-row
            ${openMenu ? "top-16" : "-top-96"}
            `}
        >
          {/* <div className="items-center space-x-8 md:flex hidden"> */}
          {navLink.map((item, index) => (
            <motion.div
              variants={FadeIn({
                direction: "up",
                delay: index * 0.1,
              })}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: false }}
              key={index}
            >
              <Link
                smooth={true}
                duration={1000}
                offset={-110}
                to={item.path}
                className={`relative underline_hover font-semibold cursor-pointer ${
                  isSelected === item.name ? "gradient-text-nav active" : ""
                }`}
                onClick={() => {
                  setIsSelected(item.name);
                  setOpenMenu(false);
                }}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
