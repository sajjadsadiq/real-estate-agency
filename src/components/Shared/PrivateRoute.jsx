import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthStatus } from "../../hook/useAuthStatus";
import LoadingSpinner from "./LoadingSpinner";

export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  if (checkingStatus) {
    return <LoadingSpinner />;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/singin" />;
}
