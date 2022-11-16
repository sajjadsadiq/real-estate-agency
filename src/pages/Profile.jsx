import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Profile = () => {
  const auth = getAuth()
  const navigate = useNavigate();
  const [fromData, setFromData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = fromData;

  const handleSingOutProfile = () => {
    auth.signOut()
    navigate("/")
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold text-center mt-5">My Profile</h1>
      <div className="w-full md:w-[50%] px-5 mt-5">
        <form>
          <input
            className="w-full px-4 mt-1 py-4 rounded text-xl border-gray-300"
            type="text"
            name="name"
            value={name}
            placeholder="@username"
            onChange={handleChange}
          />
          <input
            className="w-full px-4 py-4 rounded text-xl border-gray-300 mt-6"
            type="email"
            name="email"
            value={email}
            placeholder="saj@gmail.com"
            onChange={handleChange}
          />

          <div className="flex justify-between mt-3 whitespace-nowrap text-sm sm:text-lg">
            <p>Do want to change your name? <span className="text-red-500 hover:text-red-600 font-semibold cursor-pointer">Edit</span> </p>
            <p onClick={handleSingOutProfile} className="text-green-700 hover:text-green-800 font-semibold cursor-pointer transition duration-200 ease-in-out">Sing Out</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
