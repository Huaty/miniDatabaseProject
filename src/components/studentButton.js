import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentButton({ route, label }) {
  const [id, setID] = useState("");

  const navigate = useNavigate();
  const handleChange = (event) => {
    console.log("Event Changing");
    setID(event.target.value);
  };
  const handleSubmit = () => {
    navigate(route, { state: { studentID: id } });
  };
  return (
    <div className="flex items-center justify-center pt-[20px]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md"
      >
        <div className="text-lg font-medium text-gray-900">{label}</div>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Student ID:
          </label>
          <input
            type="text"
            id="name"
            value={id}
            onChange={handleChange}
            className="block w-full px-4 py-2 mt-2 border rounded-md bg-gray-50 border-gray-300 focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="block w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        >
          Enter
        </button>
      </form>
    </div>
  );
}
