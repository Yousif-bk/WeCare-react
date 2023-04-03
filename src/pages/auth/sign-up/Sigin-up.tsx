import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
function SignUp() {
  const authContext = useContext(AuthContext);
  console.log(authContext.isAuthenticated);

  return <div>SiginUp</div>;
}

export default SignUp;
