import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/images/logo.png";
import "./navbar.css";

function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" className="cursor-pointer" />
      </Link>

      <div className="navigation__hamburger" onClick={toggleMenu}>
        <div className="navigation__hamburger-line"></div>
        <div className="navigation__hamburger-line"></div>
        <div className="navigation__hamburger-line"></div>
      </div>

      <ul className={`navigation__links ${isOpen ? "navbar-open" : ""}`}>
        {/* <Link to="/" className="w-7 h-7 text-white cursor-pointer md:hidden">
            {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
          </Link> */}
        {links.map((link) => (
          <li key={link.name} className="navigation__link" onClick={toggleMenu}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
