import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../../hook/useAuthStatus";

export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <h2>Loading...</h2>;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/singin" />;
}
