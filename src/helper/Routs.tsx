import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/auth/login/Login";
import SignUp from "../pages/auth/sign-up/Sigin-up";

const Routs = () => {
  return (
    
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/" Component={Home} />
        <Route path="/sign-up" Component={SignUp} />
        <Route path="/login" Component={Login} />
      </Routes>
  );
};

export default Routs;
