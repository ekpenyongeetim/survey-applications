import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fox-logo.svg";
import { routes, socialLinks } from "./data";
import menuIcon from "../assets/menu-icon.png"; // Use PNG for hamburger icon
import closeIcon from "../assets/close-icon.png"; // Use PNG for close icon

function MyHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar no-print">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="fox head logo" />
        <h1 className="nav--logo-text">Tech Fox</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          <img
            src={isMenuOpen ? closeIcon : menuIcon}
            alt="menu icon"
            className="menu-icon"
          />
        </button>
      </div>

      <ul
        className={`nav-links ${isMenuOpen ? "show-menu" : ""}`}
        id="nav-links"
      >
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path} onClick={() => setIsMenuOpen(false)}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="socials">
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <li key={id}>
              <a href={link.href} target="_blank" rel="noreferrer">
                <img
                  className="socials-img"
                  src={link.svgLink}
                  alt={`${link.href} icon`}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MyHeader;
