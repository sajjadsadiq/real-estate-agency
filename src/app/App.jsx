import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Shared/Header";
import PrivateRoute from "../components/Shared/PrivateRoute";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Offers from "../pages/Offers";
import Profile from "../pages/Profile";
import SingIn from "../pages/SingIn";
import SingUp from "../pages/SingUp";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<PrivateRoute/>}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/offers" element={<Offers />} />
        <Route path="/singin" element={<SingIn />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
