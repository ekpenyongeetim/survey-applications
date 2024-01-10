import React, { useState } from "react";

const colorSchemes = {
  light: {
    backgroundColor: "#ffffff",
    textColor: "#333333",
    cardBackground: "#f0f0f0",
    cardText: "#555555",
  },
  dark: {
    backgroundColor: "#121212",
    textColor: "#ffffff",
    cardBackground: "#1f1f1f",
    cardText: "#aaaaaa",
  },
  green: {
    backgroundColor: "#c0ffc0",
    textColor: "#004000",
    cardBackground: "#a0ffa0",
    cardText: "#006000",
  },
};

function About() {
  const [currentScheme, setCurrentScheme] = useState("light");

  const changeTheme = (selectedTheme) => {
    setCurrentScheme(selectedTheme);
  };

  const currentTheme = colorSchemes[currentScheme];

  return (
    <div
      className="App"
      style={{
        backgroundColor: currentTheme.backgroundColor,
        color: currentTheme.textColor,
      }}
    >
      <div
        className="card"
        style={{
          backgroundColor: currentTheme.cardBackground,
          color: currentTheme.cardText,
        }}
      >
        <h2>Card Title</h2>
        <p>This is some content inside the card.</p>
      </div>
      <div className="theme-selector">
        <label htmlFor="theme">Select Theme: </label>
        <select
          id="theme"
          onChange={(e) => changeTheme(e.target.value)}
          value={currentScheme}
        >
          {Object.keys(colorSchemes).map((theme) => (
            <option key={theme} value={theme}>
              {theme}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default About;
