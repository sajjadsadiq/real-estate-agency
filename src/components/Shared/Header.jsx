import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="border-b shadow-sm bg-white sticky top-0">
      <header className="flex items-center justify-between max-w-6xl mx-auto px-10">
        <div>
          <img
            className="w-32 cursor-pointer"
            onClick={() => navigate("/")}
            src="https://www.gotourinc.com/wp-content/uploads/2019/02/GoTour_Logo_CMYK-1024x353.png"
            alt="Logo"
          />
        </div>
        <div>
          <ul className="flex space-x-10 text-xl">
            <li
              onClick={() => navigate("/")}
              className={`cursor-pointer py-7 font-semibold text-gray-500 border-b-4 border-b-transparent ${
                pathMathRoute("/") && "text-black border-b-green-700"
              }`}
            >
              Home
            </li>
            <li
              onClick={() => navigate("/offers")}
              className={`cursor-pointer py-7 font-semibold text-gray-500 border-b-4 border-b-transparent ${
                pathMathRoute("/offers") && "text-black border-b-green-700"
              }`}
            >
              Offers
            </li>
            <li
              onClick={() => navigate("/singin")}
              className={`cursor-pointer py-7 font-semibold text-gray-500 border-b-4 border-b-transparent ${
                pathMathRoute("/singin") && "text-black border-b-green-700"
              }`}
            >
              Sing In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
