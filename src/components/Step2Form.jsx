// Step2Form.js
import React from "react";

const Step2Form = ({ formData, handleChange }) => {
  const { selectedBanner } = formData.step2;

  const handleBannerChange = (e) => {
    handleChange(e, "step2");
  };

  const renderBanner = () => {
    switch (selectedBanner) {
      case "red":
        return <BannerRed />;
      case "yellow":
        return <BannerYellow />;
      case "blue":
        return <BannerBlue />;
      default:
        return null;
    }
  };

  return (
    <div>
      <select value={selectedBanner} onChange={handleBannerChange}>
        <option value="">Select Banner</option>
        <option value="red">Red Banner</option>
        <option value="yellow">Yellow Banner</option>
        <option value="blue">Blue Banner</option>
      </select>
    </div>
  );
};

export default Step2Form;
