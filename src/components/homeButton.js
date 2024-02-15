import { useNavigate } from "react-router-dom";

const Homebutton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className="border-[1px] border-black rounded-[10px] hover:bg-black hover:text-white p-[10px]"
      >
        Go back Home
      </button>
    </div>
  );
};

export default Homebutton;
