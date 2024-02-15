import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const buttons = [
    { name: "Student List", path: "/student" },
    { name: "Enrollment", path: "/enrollment" },
    { name: "Courses", path: "/courses" },
  ];

  return (
    <div className="">
      <Navbar />
      <div className="text-xl text-center my-5">Welcome Teacher!</div>
      <div className="w-[100vw] flex justify-center items-center">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => navigate(button.path)}
            className="border-[1px] rounded-md m-[5px] p-[5px] hover:text-white hover:bg-black"
          >
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
