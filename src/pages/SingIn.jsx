import React, { useState } from "react";
import SingInImg from "./../assets/singup.svg";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/Shared/OAuth";
import { toast } from "react-toastify";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SingIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  async function handleSingInForm(event) {
    event.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (userCredential.user) {
        navigate("/");
      }
      toast.success("Successfull Login");
      console.log(user);
    } catch (error) {
      toast.error("Bad user credentials");
    }
  }
  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-16">Sing In</h1>
      <div className="flex flex-wrap justify-center items-center max-w-6xl mx-auto py-8">
        <div className="w-full lg:w-[50%] md:w-[70%] px-10">
          <img src={SingInImg} alt="singIn" />
        </div>
        <div className="w-full lg:w-[40%] md:w-[70%] px-10 lg:ml-20 mt-10">
          <form onSubmit={handleSingInForm}>
            <div>
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
            <div className="relative my-4">
              <label htmlFor="email" className="text-xl">
                Password
              </label>
              <input
                className="w-full px-4 py-4 mt-1 rounded text-xl border-gray-300"
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                placeholder="************"
                onChange={handleChange}
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-14 cursor-pointer text-xl"
                />
              ) : (
                <AiFillEye
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-14 cursor-pointer text-xl"
                />
              )}
            </div>
            <div className="flex justify-between whitespace-nowrap lg:text-sm sm:text-xl">
              <p>
                Don't have a account?{" "}
                <Link
                  className="text-green-700 hover:text-green-500"
                  to="/singup"
                >
                  Register
                </Link>
              </p>
              <Link
                to="/forgotpassword"
                className="text-green-700 hover:text-green-500"
              >
                Forgoted Password
              </Link>
            </div>
            <button
              type="submit"
              className="flex items-center justify-center my-6 bg-green-700 hover:bg-green-800 text-white w-full py-4 rounded-md uppercase font-semibold transition duration-150 ease-in-out"
            >
              Sing In <RiSendPlaneFill className="inline-block ml-2" />
            </button>
            <OAuth />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
