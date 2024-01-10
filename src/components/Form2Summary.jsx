// Form2Summary.js
import React from "react";
import { ToWords } from "to-words";

const Form2Summary = ({ formData, surveyor }) => {
  const handlePrint = (event) => {
    event.preventDefault();
    window.print();
  };
  // Helper function to calculate the amount based on user's pillar value
  const calculateAmount = (pillar, rate) => {
    return pillar * rate;
  };

  // Helper function to calculate the total amount for a specific column
  const calculateTotal = (columnName) => {
    return formData.step1.reduce(
      (total, user) => total + Number(user[columnName]),
      0
    );
  };

  // Helper function to calculate the total amount for a specific column
  const calculateLodge = (columnName, rate = 1) => {
    // Use Math.max to find the highest index + 1
    const highestIndex = Math.max(
      ...formData.step1.map((_, index) => index + 1)
    );
    return highestIndex * rate;
  };

  const toWords = new ToWords();
  let lodge = toWords.convert(calculateLodge("pillar", 5000));

  // Helper function to convert a three-digit number to words
  const convertThreeDigitNumber = (num) => {
    const units = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];
    const teens = [
      "",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];
    const tens = [
      "",
      "Ten",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    let words = "";

    if (num >= 100) {
      words += units[Math.floor(num / 100)] + " Hundred ";
      num %= 100;
    }

    if (num >= 20) {
      words += tens[Math.floor(num / 10)] + " ";
      num %= 10;
    } else if (num >= 11) {
      words += teens[num - 10] + " ";
      num = 0;
    }

    words += units[num];

    return words.trim();
  };

  // Helper function to convert a number to words
  const numberToWords = (num) => {
    if (num === 0) {
      return "Zero";
    }

    const groups = [
      "",
      "Thousand",
      "Million",
      "Billion",
      "Trillion",
      "Quadrillion",
    ]; // Add more if needed

    let words = "";
    let groupIndex = 0;

    while (num > 0) {
      const threeDigits = num % 1000;
      if (threeDigits !== 0) {
        words =
          convertThreeDigitNumber(threeDigits) +
          " " +
          groups[groupIndex] +
          " " +
          words;
      }

      num = Math.floor(num / 1000);
      groupIndex++;
    }

    return words.trim();
  };

  return (
    <div>
      <button className="print-button" onClick={handlePrint}>
        Print
      </button>

      <h2>Form 2</h2>
      <table border="1">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Plan Number</th>
            <th>
              Name of Client & Size of <br />
              Land
            </th>
            <th>
              SURCON <br />
              Pillar <br />
              #900.00
            </th>
            <th>
              SURCON <br />
              Project <br />
              #320.00
            </th>
            <th>
              NIS Building <br />
              #3030.00
            </th>
            <th>
              NIS APPSN <br />
              #750.00
            </th>
          </tr>
        </thead>
        <tbody>
          {formData.step1.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.planNumber}</td>
              <td>
                {user.title}
                <br />
                Area: {user.area}
              </td>
              {/* Calculate and display the values for SURCON PILLAR and SURCON PROJECT */}
              <td>{calculateAmount(user.pillar, 900)}</td>
              <td>{calculateAmount(user.pillar, 320)}</td>
              <td>{calculateAmount(user.pillar, 3030)}</td>
              <td>{calculateAmount(user.pillar, 750)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="form2-footer-container">
        <p>ATTACHED HEREWITH ARE COPIES OF MY PAYMENT TELLERS.</p>
        <p>
          TOTAL MANDATORY DEPOSIT PAID = {calculateTotal("deposit")}(
          {numberToWords(calculateTotal("deposit"))} Naira)
        </p>
        <p>
          TOTAL AMOUNT FOR SURCON PILLAR = {calculateTotal("pillar") * 900}(
          {numberToWords(calculateTotal("pillar") * 900)} Naira)
        </p>
        <p>
          TOTAL AMOUNT FOR SURCON PROJECT = {calculateTotal("pillar") * 320}(
          {numberToWords(calculateTotal("pillar") * 320)} Naira)
        </p>
        <p>
          TOTAL AMOUNT FOR NIS BUILDING = {calculateTotal("pillar") * 3030}(
          {numberToWords(calculateTotal("pillar") * 3030)} Naira)
        </p>
        <p>
          TOTAL AMOUNT FOR NIS APPSN = {calculateTotal("pillar") * 750}(
          {numberToWords(calculateTotal("pillar") * 750)} Naira)
        </p>
        <p>
          TOTAL AMOUNT FOR SURCON LODGEMENT AND CRS REVENUE ={" "}
          {calculateLodge("pillar", 5000)}({lodge} Naira)
        </p>
      </div>

      <section className="signatory">
        <div>
          <div>....................</div>
          <p>
            <strong>{surveyor}</strong>
          </p>
        </div>

        <div>
          <div>Vetted by...........</div>
          <p>(Name & Signature, For NIS-CRS)</p>
        </div>
        <div>
          <span>Vetted by...........</span>
          <p>(Name & Signature, For SSCE)</p>
        </div>
      </section>
    </div>
  );
};

export default Form2Summary;
