
import { useNavigate } from "react-router-dom";

export function HomeButtons() {
  const navigate = useNavigate();
  return (
    <button
      className="shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] px-8 py-2 border-2 text-slate-300 hover:text-black text-lg font-medium rounded-md transition duration-200 ease-linear hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-orange-600 focus:ring-orange-500"
      onClick={() => navigate("/")}
    >
      Lets go to home
    </button>
  );
}
