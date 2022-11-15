import React, { useState } from "react";
import ForgotedPassword from "./../assets/forgot-password.svg";
import { RiSendPlaneFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import OAuth from "../components/Shared/OAuth";
import { toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  async function handleForgotedPassword(event) {
    event.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was send");
    } catch (error) {
      toast.error("Cloud not send reset password!");
    }
  }
  return (
    <div>
      <div>
        <h1 className="text-center font-bold text-3xl mt-16">
          Forgot Password
        </h1>
        <div className="flex flex-wrap justify-center items-center max-w-6xl mx-auto py-8">
          <div className="w-full lg:w-[50%] md:w-[70%] px-10">
            <img src={ForgotedPassword} alt="Forgoted Password" />
          </div>
          <div className="w-full lg:w-[40%] md:w-[70%] px-10 lg:ml-20 mt-10">
            <form onSubmit={handleForgotedPassword}>
              <div className="mb-4">
                <label htmlFor="email" className="text-xl">
                  Email
                </label>
                <input
                  className="w-full px-4 mt-1 py-4 rounded text-xl border-gray-300"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="saj@gmail.com"
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-between whitespace-nowrap lg:text-sm sm:text-xl">
                <p>
                  Don't have a account?{" "}
                  <Link
                    className="text-green-700 hover:text-green-500"
                    to="/singup"
                  >
                    Sing Up
                  </Link>
                </p>
                <Link
                  to="/singin"
                  className="text-green-700 hover:text-green-500"
                >
                  Sing In Instead
                </Link>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center my-6 bg-green-700 hover:bg-green-800 text-white w-full py-4 rounded-md uppercase font-semibold transition duration-150 ease-in-out"
              >
                Send Reset Email{" "}
                <RiSendPlaneFill className="inline-block ml-1" />
              </button>
              <OAuth />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
