import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const navigator = (e) => {
    navigate(e.target.value);
  };
  return (
    <div className="w-[100vw]">
      <Navbar />
      <div>Welcome home</div>
      <button
        onClick={navigator}
        value="/student"
        className="border-[1px] rounded-md"
      >
        Student
      </button>
    </div>
  );
};

export default Home;
