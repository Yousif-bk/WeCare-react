import { createContext, useContext, useState } from "react";
import { LoginForm } from "../models/LoginForm";
import { useNavigate } from "react-router-dom";
interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  login: (loginForm: LoginForm) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  login: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = async (loginForm: LoginForm) => {
    try {
      const response = await fetch(``, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loginForm }),
      });
      if (response.ok) {
        const res = await response.json();
        setIsAuthenticated(true);
        navigate("/sign-up");
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      console.error(error);
      throw new Error("Unable to login");
    }
  };

  const logout = () => {};

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
