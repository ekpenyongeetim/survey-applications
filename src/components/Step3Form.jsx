// Step3Form.js
import React from "react";

const Step3Form = ({ formData, handleChange }) => {
  return (
    <div>
      <label>Address:</label>
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={(e) => handleChange(e, "step3")}
      />
      <br />
      <label>City:</label>
      <input
        type="text"
        name="city"
        value={formData.city}
        onChange={(e) => handleChange(e, "step3")}
      />
      <br />
      <label>Zip Code:</label>
      <input
        type="text"
        name="zipCode"
        value={formData.zipCode}
        onChange={(e) => handleChange(e, "step3")}
      />
      <br />
    </div>
  );
};

export default Step3Form;
