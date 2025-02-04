import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [isSelected, setIsSelected] = useState("Home");

  const navLink = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <header className="container_home text-white w-full px-[10%] fixed top-0 z-50 hidden">
      <nav className="flex justify-between items-center h-16">
        <div className="gradient-text font-bold text-xl">
          <Link to="/home">Nhật Toàn</Link>
        </div>
        <div className="flex items-center space-x-8">
          {navLink.map((item, index) => (
            <Link
              key={index}
              to="/home"
              className={`underline_hover font-semibold ${
                isSelected === item.name ? "gradient-text-nav active" : ""
              }`}
              onClick={() => setIsSelected(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
