// Header.jsx
import React from "react";

const Header = ({ img, surveyor }) => {
  return (
    <div>
      <img src={img} alt="Header Image" style={{ maxWidth: "100%" }} />
    </div>
  );
};

export default Header;
