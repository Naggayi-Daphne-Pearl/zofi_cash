import { createContext, useContext, useState } from "react";
import {
  forgotPasswordApi,
  loginApi,
  registerApi,
  resetPasswordApi,
} from "../pages/api/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await loginApi(email, password);
      setUser(response.data.user);
      setError(null);
    } catch (error) {
      setError("Invalid email or password");
      throw error;
    }
  };
  const register = async (userData) => {
    try {
      const response = await registerApi(userData);
      setUser(response.data.user);
      setError(null);
    } catch (error) {
      setError("Registration failed");
      throw error;
    }
  };

  const resetPassword = async (securityAnswer, password) => {
    try {
      await resetPasswordApi(securityAnswer, password);
      setError(null);
    } catch (error) {
      setError("Failed to reset password");
      throw error;
    }
  };

  const forgotPassword = async (email) => {
    try {
      await forgotPasswordApi(email);
      setError(null);
    } catch (error) {
      setError("Failed to reset password");
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        login,
        register,
        forgotPassword,
        logout,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
