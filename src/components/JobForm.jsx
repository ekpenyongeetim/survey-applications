// JobForm
import React from "react";

const JobForm = ({ user, index, handleChange, removeUserGroup, errors }) => {
  return (
    <div className=".form" key={index}>
      <div className="title">{`Job ${index + 1}`}</div>
      <div className="input-container ic1">
        <input
          className="input"
          type="text"
          placeholder=""
          name="title"
          value={user.title}
          onChange={(e) => handleChange(e, "step1", index)}
        />
        <div className="cut cut-long"></div>
        <label className="placeholder">Job Title / Name</label>
        {errors[`title_${index}`] && (
          <div className="error-message">{errors[`title_${index}`]}</div>
        )}
      </div>

      <div className="input-container ic2">
        <input
          className="input"
          type="text"
          placeholder=""
          name="planNumber"
          value={user.planNumber}
          onChange={(e) => handleChange(e, "step1", index)}
        />
        <div className="cut"></div>
        <label className="placeholder">Plan Number</label>
        {errors[`planNumber_${index}`] && (
          <div className="error-message">{errors[`planNumber_${index}`]}</div>
        )}
      </div>

      <div className="half-input">
        <div className="input-container ic2 half1">
          <input
            className="input"
            type="text"
            placeholder=""
            name="area"
            value={user.area}
            onChange={(e) => handleChange(e, "step1", index)}
          />
          <div className="cut cut-short"></div>
          <label className="placeholder">Area</label>
          {errors[`area_${index}`] && (
            <div className="error-message">{errors[`area_${index}`]}</div>
          )}
        </div>

        <div className="input-container ic2 half2">
          <input
            className="input"
            type="number"
            placeholder=""
            name="pillar"
            value={user.pillar}
            onChange={(e) => handleChange(e, "step1", index)}
          />
          <div className="cut"></div>
          <label className="placeholder">Pillars</label>
          {errors[`pillar_${index}`] && (
            <div className="error-message">{errors[`pillar_${index}`]}</div>
          )}
        </div>
      </div>

      <div className="input-container ic2">
        <input
          className="input"
          type="text"
          placeholder=""
          name="location"
          value={user.location}
          onChange={(e) => handleChange(e, "step1", index)}
        />
        <div className="cut cut-short"></div>
        <label className="placeholder">L G A</label>
        {errors[`location_${index}`] && (
          <div className="error-message">{errors[`location_${index}`]}</div>
        )}
      </div>

      <div className="input-container ic2">
        <input
          className="input"
          type="number"
          placeholder=""
          name="deposit"
          value={user.deposit}
          onChange={(e) => handleChange(e, "step1", index)}
        />
        <div className="cut cut-long"></div>
        <label className="placeholder">Mandatory Deposit</label>
        {errors[`deposit_${index}`] && (
          <div className="error-message">{errors[`deposit_${index}`]}</div>
        )}
      </div>

      {/* Conditionally render the remove button to display only when the fields is more than one*/}
      {index >= 1 && (
        <button
          className="remove-btn"
          type="button"
          onClick={() => removeUserGroup(index)}
        >
          Remove Job
        </button>
      )}
    </div>
  );
};

export default JobForm;
