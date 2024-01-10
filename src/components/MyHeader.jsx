import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/fox-logo.svg";
import { routes, socialLinks } from "./data";

function MyHeader() {
  return (
    <nav className="navbar no-print">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="fox head logo" />
        <h1 className="nav--logo-text">Tech Fox</h1>
      </div>

      <ul className="nav-links" id="nav-links">
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.label}</Link>
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
