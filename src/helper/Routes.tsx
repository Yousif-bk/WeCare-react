import { Route, Routes as ReactRoutes, Navigate } from "react-router-dom";
import Login from "../pages/auth/login/LoginPage";
import SignUp from "../pages/auth/sign-up/Sigin-up";
import { FC, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { AppRoutes } from "../models/AppRoutes";
import HomePage from "../pages/home/home";
import Dashboread from "../pages/dashboread/Dashboread";
import NotFound from "../components/NotFound/Not-found";


interface PrivateRouteProps {
  element: JSX.Element;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ element }) => {
  const authContext = useContext(AuthContext)
  return authContext.token || authContext.isAuthenticated ? element : <Navigate to={AppRoutes.Auth.login} />;
};

const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path={AppRoutes.Auth.signUp} element={<SignUp />} />
      <Route path={AppRoutes.Auth.login} element={<Login />} />
      <Route path="/dashboread" element={<Dashboread />} />
      <Route
        path={AppRoutes.Landing.home}
        element={<PrivateRoute element={<HomePage />} />}
      />
      <Route path="/" element={<Navigate to={AppRoutes.Landing.home} />} />
      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  );
};

export default Routes;

