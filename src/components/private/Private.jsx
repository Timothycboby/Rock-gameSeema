import React from "react";
import { Navigate, Outlet } from "react-router-dom";
function Private() {
  const auth = localStorage.getItem("user");
  return <div>{auth ? <Outlet /> : <Navigate to="/auth" />}</div>;
}
export default Private;
