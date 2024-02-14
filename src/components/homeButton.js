import { useNavigate } from "react-router-dom";

const Homebutton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className="border-[4px] rounded-[10px] hover:bg-black hover:text-white"
      >
        Go back Home
      </button>
    </div>
  );
};

export default Homebutton;
