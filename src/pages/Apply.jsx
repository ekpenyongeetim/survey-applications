import React, { useState, useEffect } from "react";
import JobList from "../components/JobList";
import Step3Form from "../components/Step3Form";
import Summary from "../components/Summary";
import Header from "../components/Header";
import { headerOptions } from "../components/data";
import Form1Footer from "../components/Form1Footer";
import Form2Summary from "../components/Form2Summary";
import right from "../assets/chevron-right.svg";
import "../styles/Apply.css";
import MyHeader from "../components/MyHeader";
import { useNavigate } from "react-router-dom";
import Confetti from "react-confetti";

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
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedFormData = localStorage.getItem("applyFormData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
    // Add event listener for popstate
    const handlePopState = (event) => {
      prevStep();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    if (currentStep === 4) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

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
      localStorage.setItem("applyFormData", JSON.stringify(newData));
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
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const handleSubmit = (e, navigateTo) => {
    e.preventDefault();
    localStorage.removeItem("formData");
    if (navigateTo === "home") {
      navigate("/");
    } else if (navigateTo === "start") {
      setCurrentStep(1);
    }
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
          <>
            <MyHeader />
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
          </>
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
          <div className="case3-container">
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
          </div>
        );
      case 4:
        return (
          <div className="case4">
            {showConfetti && <Confetti />}
            <Step3Form formData={formData.step3} handleChange={handleChange} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="apply-container">
      <form onSubmit={(e) => handleSubmit(e, "home")}>
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
        {currentStep === 4 && (
          <button type="submit" className="return-button">
            Return to Home
          </button>
        )}
      </form>
    </div>
  );
};

export default Apply;
