import React, { useState } from "react";
import JobList from "../components/JobList";
import Step3Form from "../components/Step3Form";
import Summary from "../components/Summary";
import Header from "../components/Header";
import { headerOptions } from "../components/data";
import Form1Footer from "../components/Form1Footer";
import Form2Summary from "../components/Form2Summary";
import right from "../assets/chevron-right.svg";
import "../styles/Apply.css";

const Apply = () => {
  const [formData, setFormData] = useState({
    step1: [
      {
        title: "",
        planNumber: "",
        location: "",
        pillar: "",
        deposit: "",
        area: "",
      },
    ],
    step2: { selectedBanner: "" },
    step3: { address: "" },
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedValue, setSelectedValue] = useState("");
  const [surveyor, setSurveyor] = useState("");

  const handleChange = (e, step, index) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newData = { ...prevData };
      if (Array.isArray(newData[step])) {
        newData[step][index] = {
          ...newData[step][index],
          [name]: value,
          // Ensure banner property is preserved
        };
      } else {
        newData[step] = { ...newData[step], [name]: value };
      }
      return newData;
    });
  };

  const addNewUser = () => {
    const jobInfo = {
      title: "",
      planNumber: "",
      location: "",
      pillar: "",
      deposit: "",
      area: "",
    };
    setFormData((prevData) => ({
      ...prevData,
      step1: [...prevData.step1, jobInfo],
    }));
  };

  const removeUserGroup = (index) => {
    setFormData((prevData) => {
      const newStep1 = [...prevData.step1];
      newStep1.splice(index, 1);
      return { ...prevData, step1: newStep1 };
    });
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    // Set surveyor based on the selected value
    setSurveyor(
      headerOptions.find((option) => option.value === value)?.surveyor ||
        "white"
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="case1-container">
            <div className="dropdown-label">
              <label htmlFor="dropdown">Select a Survey Company:</label>
            </div>
            <select
              id="dropdown"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="" className="select-btn">
                ---- Select ----
              </option>
              {headerOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <JobList
              formData={formData}
              handleChange={handleChange}
              addNewUser={addNewUser}
              removeUserGroup={removeUserGroup}
            />
          </div>
        );
      case 2:
        return (
          <div className="case2-container">
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

            <Summary formData={formData} />
            <Form1Footer surveyor={surveyor} />
          </div>
        );
      case 3:
        return (
          <>
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
            <Form2Summary formData={formData} surveyor={surveyor} />
          </>
        );
      case 4:
        return (
          <Step3Form formData={formData.step3} handleChange={handleChange} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="apply-container">
      <form>
        {renderStep()}
        <br />
        {currentStep > 1 && (
          <button className="previous-btn" type="button" onClick={prevStep}>
            Previous
          </button>
        )}
        {currentStep < 4 && (
          <button className="next-button" type="button" onClick={nextStep}>
            Next
            <img src={right} className="right" alt="next symbol" />
          </button>
        )}
        {currentStep === 4 && <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export default Apply;
