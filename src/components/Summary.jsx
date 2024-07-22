// Summary.js
import React from "react";
import Form1Body from "./Form1Body";

const Summary = ({ formData }) => {
  const handlePrint = (event) => {
    event.preventDefault();
    window.print();
  };

  // Helper function to calculate the sum of pillar values
  const calculatePillarSum = () => {
    return formData.step1.reduce((sum, user) => sum + Number(user.pillar), 0);
  };

  // Helper function to format the date
  const formatDate = (date) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  // Get the current date
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);
  // Calculate the pillar sum
  const pillarSum = calculatePillarSum();

  return (
    <div>
      {/* Print button */}
      <button className="print-button" onClick={handlePrint}>
        Print
      </button>

      <Form1Body formattedDate={formattedDate} pillarSum={pillarSum} />

      <table border="1">
        <thead>
          <tr>
            <th>S/ N</th>
            <th>Plan Number</th>
            <th>Name of Client & Location of Land Parcel</th>
            <th>Size of Land Parcel</th>
            <th className="table table-med">Mandatory Deposit</th>

            <table>
              Plan Lodgement
              <table border="2">
                <tr>
                  <td className="table table-small">
                    <small>CRS govt #3000</small>
                  </td>
                  <td className="table table-small">plan lodge #2000</td>
                </tr>
              </table>
            </table>

            <th className="table table-small">Pillar nos. Required</th>
            <th>SURCON Pillar nos. (Numbers and Prefix)</th>
          </tr>
        </thead>
        <tbody>
          {formData.step1.map((user, index) => (
            <tr key={index} className="job-item">
              <td>{index + 1}</td>
              <td>{user.planNumber}</td>
              <td>
                {user.title}
                <br />
                {user.location}
              </td>
              <td className="table-small">{user.area}</td>
              <td>{user.deposit}</td>
              <table className="lodge-table" border="2">
                <tr>
                  <td className="lodge-3000">3000</td>
                  <td className="lodge-2000">2000</td>
                </tr>
              </table>
              <td>{user.pillar}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
