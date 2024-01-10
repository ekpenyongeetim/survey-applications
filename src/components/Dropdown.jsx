import React from "react";
import { headerOptions } from "./data";

const Header = ({ surveyor, img }) => {
  return (
    <div>
      <img src={img} alt="Header Image" style={{ maxWidth: "100%" }} />
      <div>{surveyor}</div>
    </div>
  );
};

const Dropdown = ({ selectedValue, setSelectedValue }) => {
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Select a Survey Company:</label>
      <select id="dropdown" value={selectedValue} onChange={handleSelectChange}>
        <option value="">-- Select --</option>
        {headerOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {selectedValue && (
        <Header
          surveyor={
            headerOptions.find((option) => option.value === selectedValue)
              ?.surveyor || "white"
          }
          img={
            headerOptions.find((option) => option.value === selectedValue)
              ?.img || "path/to/default-image.jpg"
          }
        />
      )}
    </div>
  );
};

export default Dropdown;
