import { Route, Routes as ReactRoutes, Navigate } from "react-router-dom";
import Login from "../pages/auth/login/Login";
import SignUp from "../pages/auth/sign-up/Sigin-up";
import { FC, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import HomePage from "../pages/home/home";


interface PrivateRouteProps {
  element: JSX.Element;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ element }) => {
  const authContext = useContext(AuthContext)
  return authContext.token ? element : <Navigate to="/login" />;
};

const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<PrivateRoute element={<HomePage />} />} />
    </ReactRoutes>
  );
};

export default Routes;

