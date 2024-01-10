import React from "react";
import { Link } from "react-router-dom";
import MyHeader from "../components/MyHeader";

function Home() {
  const handleClickRMD = () => {
    // Show the alert
    const show = alert("Apply RMD coming soon...");

    // Close the alert after 3 seconds
    setTimeout(() => {
      // Dismiss the alert
      show;
    });
  };
  return (
    <>
      <MyHeader />
      <section className="hero">
        <div className="hero-banner">
          <h1>Welcome to Survey Applications</h1>
          <p>
            This Survey Application App helps you generate survey application
            templates for application of SURCON numbers. Explore your options.
          </p>
          <div className="hero-button-container">
            <Link to="/apply">
              <button className="btn">Apply Numbers</button>
            </Link>

            <button className="btn" onClick={handleClickRMD}>
              Apply RMD
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
