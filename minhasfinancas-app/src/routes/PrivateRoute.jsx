import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import AuthContext from "../app/context/authContext";

const PrivateRoute = ({ path, ...props }) => {
  const { isAutenticado } = useContext(AuthContext);

  return isAutenticado ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
