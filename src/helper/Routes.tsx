import { Route, Routes as ReactRoutes, Navigate } from "react-router-dom";
import Login from "../pages/auth/login/LoginPage";
import SignUp from "../pages/auth/sign-up/Sigin-up";
import { AppRoutes } from "../models/AppRoutes";
import Dashboread from "../pages/dashboread/Dashboread";
import NotFound from "../components/NotFound/Not-found";
import { ProtectedRoute } from "./ProtectedRoute";
import HomePage from "../pages/home/HomePage";





const Routes: React.FC = () => {
  return (
    <ReactRoutes>
      <Route path={AppRoutes.Auth.signUp} element={<SignUp />} />
      <Route path={AppRoutes.Auth.login} element={<Login />} />
      <Route path="/dashboread" element={<Dashboread />} />
      <Route
        path={AppRoutes.Landing.home}
        element={<ProtectedRoute element={<HomePage />} />}
      />
      <Route path="/" element={<Navigate to={AppRoutes.Landing.home} />} />
      <Route path="*" element={<NotFound />} />
    </ReactRoutes>
  );
};

export default Routes;

