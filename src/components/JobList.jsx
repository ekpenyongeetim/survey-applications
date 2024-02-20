// JobList.js
import React from "react";
import JobForm from "./JobForm";

const JobList = ({ formData, handleChange, addNewUser, removeUserGroup }) => {
  return (
    <div>
      {formData.step1.map((user, index) => (
        <JobForm
          key={index}
          user={user}
          index={index}
          handleChange={handleChange}
          removeUserGroup={removeUserGroup}
        />
      ))}

      {formData.step1.length < 8 && (
        <button className="submit" type="button" onClick={addNewUser}>
          Add Job
        </button>
      )}
      <br />
    </div>
  );
};

export default JobList;
