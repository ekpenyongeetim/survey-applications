// SurveyorSection.jsx
import React from "react";

const Form1Footer = ({ surveyor }) => {
  return (
    <div className="footer-container">
      <p>
        Attached herewith are copies of my relevant documents and receipts for
        appropriate payments made. <br />
        The Sketch (s) / diagram(s) of the land parcel (s) and the{" "}
        <strong>schedule of payment (form 2a)</strong> are also attached.
      </p>

      <div className="signatory">
        <section className="s1">
          <div>..............................</div>
          <div className="sig">
            <strong>{surveyor}</strong>
          </div>
        </section>

        <section className="s2">
          <div>
            <strong>Recommended by</strong>.....................
          </div>
          <div className="sig">
            {" "}
            <strong>(Chairman For )</strong>NIS-CRS
          </div>
        </section>

        <section className="s3">
          <div>
            <strong>Approved by</strong>..................
          </div>
          <div className="sig">
            <strong>(Chairman )</strong>SSCE
          </div>
        </section>

        <section className="s4">
          <div>
            <strong>Issued by</strong>..........................
          </div>
          <div className="sig">
            <strong>(Name and Signature of Desk Officer)</strong>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Form1Footer;
