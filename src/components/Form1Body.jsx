// RegularPillarsRequest.js
import React from "react";

const Form1Body = ({ formattedDate, pillarSum }) => {
  return (
    <div className="form1-body">
      <section className="ref-container">
        <div className="reference">
          <div className="refs">
            Our Ref: ...................................
          </div>
          <div className="refs">
            Your Ref: ..................................
          </div>
        </div>
        {/* Display the formatted date */}
        <div>
          Date: <span className="date">{formattedDate}</span>
        </div>
      </section>
      <section className="note-address">
        <p>
          The Chairman,
          <br />
          SURCON State Ethics Committee,
          <br />
          Calabar,
          <br />
          Cross River State.
        </p>
        <p>
          Through: The Chairman,
          <br />
          NIS-CRS, Calabar.
        </p>
      </section>
      <section>
        <p className="letter-topic">REQUEST FOR REGULAR SURCON PILLARS</p>
        <p className="letter-body">
          In compliance with the SURCON rules and Regulation, kindly issue to
          me, through the NIS-CRS chairman,
          <br />a total of <span>{pillarSum}</span> regular pillar numbers for
          use with Cross River State, for the underlisted jobs
        </p>
      </section>
    </div>
  );
};

export default Form1Body;
