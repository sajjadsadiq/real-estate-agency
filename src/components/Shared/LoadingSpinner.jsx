import React from "react";
import Spinner from "./../../assets/loading-spinner.svg";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center fixed left-0 right-0 top-0 bottom-0 z-50">
      <img src={Spinner} alt="Loading...." className="h-24" />
    </div>
  );
};

export default LoadingSpinner;
