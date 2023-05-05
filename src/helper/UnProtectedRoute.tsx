import { Navigate } from "react-router-dom";
import { AppRoutes } from "../models/AppRoutes";
import { FC, useContext } from "react";
import { ProtectedRouteProps } from "./ProtectedRoute";
import { AuthContext } from "../context/AuthContext";

export const UnProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
  const authContext = useContext(AuthContext);
  return !(authContext.token || authContext.isAuthenticated) ? (
    element
  ) : (
    <Navigate to={AppRoutes.Auth.login} />
  );
};
