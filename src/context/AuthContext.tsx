import { createContext, useContext, useEffect, useState } from "react";
import { LoginForm } from "../models/LoginForm";
import { useNavigate } from "react-router-dom";
interface AuthContextType {
  isAuthenticated: boolean;
  login: (loginForm: LoginForm) => Promise<void>;
  logout: () => void;
  token: string | null;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  token: null,
  login: async () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [token, setToken] = useState<string | null>(() => {
    // Retrieve the token from local storage on component mount
    const storedToken = localStorage.getItem("authToken");
    return storedToken ? storedToken : null;
  });

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
    return () => {};
  }, []);



  const login = async (loginForm: LoginForm) => {
    localStorage.setItem("authToken", 'auth');
    setIsAuthenticated(true)
    navigate('/home')
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
