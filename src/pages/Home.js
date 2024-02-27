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
            className="text-lg font-semibold border-2 border-black rounded-xl hover:bg-black hover:text-white py-2 px-6 transition-colors duration-200 ease-in-out shadow-lg ml-[10px]"
          >
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
