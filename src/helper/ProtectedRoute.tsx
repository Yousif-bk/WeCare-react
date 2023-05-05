import { FC, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { AppRoutes } from "../models/AppRoutes";

export interface ProtectedRouteProps {
    element: JSX.Element;
}
export const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
    const authContext = useContext(AuthContext);
    return authContext.token || authContext.isAuthenticated ? (
        element
    ) : (
        <Navigate to= { AppRoutes.Auth.login } />
  );
}