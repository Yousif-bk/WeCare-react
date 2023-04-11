import { createContext, useContext, useEffect, useState } from "react";
import { LoginForm } from "../models/LoginForm";
import { useNavigate } from "react-router-dom";
interface AuthContextType {
  isAuthenticated: boolean;
  login: (loginForm: LoginForm) => Promise<void>;
  logout: () => void;
  token: string | null;
  setToken: (token: string | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  token: null,
  login: async () => {},
  logout: () => {},
  setToken: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [token, setToken] = useState<string | null>(() => {
    const storedToken = localStorage.getItem("app:jwt");
    return storedToken ? storedToken : null;
  });

  useEffect(() => {
    const token = localStorage.getItem("app:jwt");
    if (token) {
      setIsAuthenticated(true);
    }
    return () => {};
  }, []);



  const login = async (loginForm: LoginForm) => {
    localStorage.setItem("app:jwt", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ");
    setIsAuthenticated(true)    
    navigate('/home')
  };

  const logout = () => {
    localStorage.removeItem("app:jwt");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
