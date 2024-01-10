// contact.jsx
import React, { useState } from "react";
import logo from "../assets/shapestagon-logo.png";
import "../App.css"; // Import a CSS file to include your styling

function Contact() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="body">
        <h1>Toggle Light and dark mode</h1>
        <div className="card">
          <h2>Card Title</h2>
          <img src={logo} alt="shapestagon logo" className="contact-logo" />
          <p>This is some content inside the card.</p>
        </div>
        <button className="toggle-btn" onClick={toggleMode}>
          Toggle Mode
        </button>
      </div>
    </div>
  );
}

export default Contact;
