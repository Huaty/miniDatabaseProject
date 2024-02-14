import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StudentResult = () => {
  const [id, setID] = useState(""); // State to store the name input

  const handleChange = (event) => {
    setID(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    navigate("/studentReport", { state: { studentID: id } });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={id}
          onChange={handleChange}
          className="border-[3px]"
        />
        <button type="submit" className="border-[3px] rounded-[10px] m-[5px]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentResult;
