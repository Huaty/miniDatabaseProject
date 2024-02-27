import { useNavigate } from "react-router-dom";

const Homebutton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => navigate("/")}
        className="text-lg font-semibold border-2 border-black rounded-xl hover:bg-black hover:text-white py-2 px-6 transition-colors duration-200 ease-in-out shadow-lg"
      >
        Go back Home
      </button>
    </div>
  );
};

export default Homebutton;
