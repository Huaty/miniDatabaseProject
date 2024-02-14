import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[100vw]">
      <Navbar />
      <div>Welcome home</div>
      <button
        onClick={() => navigate("/student")}
        className="border-[1px] rounded-md"
      >
        Student
      </button>
      <button
        onClick={() => navigate("/enrollment")}
        className="border-[1px] rounded-md"
      >
        Enrollment
      </button>
      <button
        onClick={() => navigate("/assessment")}
        className="border-[1px] rounded-md"
      >
        Assessment
      </button>
    </div>
  );
};

export default Home;
