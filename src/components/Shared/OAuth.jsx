import React from "react";
import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  return (
    <div>
      <button
        type="submit"
        className="my-6 bg-gray-100 hover:bg-gray-200 text-black w-full py-4 rounded-md uppercase font-semibold transition duration-150 ease-in-out"
      >
        <FcGoogle className="inline-block text-xl mr-2" /> Contine with Google
      </button>
    </div>
  );
};

export default OAuth;
