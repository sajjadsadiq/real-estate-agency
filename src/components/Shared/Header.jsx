import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  // Daynamic Header Item Name Change
  const [pageState, setPageState] = useState("Sing In");
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sing In");
      }
    });
  }, []);
  //

  const location = useLocation();
  const navigate = useNavigate();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="border-b shadow-sm bg-white sticky top-0 z-40">
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
                pathMatchRoute("/") && "text-black border-b-green-700"
              }`}
            >
              Home
            </li>
            <li
              onClick={() => navigate("/offers")}
              className={`cursor-pointer py-7 font-semibold text-gray-500 border-b-4 border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-green-700"
              }`}
            >
              Offers
            </li>
            <li
              onClick={() => navigate("/profile")}
              className={`cursor-pointer py-7 font-semibold text-gray-500 border-b-4 border-b-transparent ${
                (pathMatchRoute("/singin") || pathMatchRoute("/profile")) &&
                "text-black border-b-green-700"
              }`}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
