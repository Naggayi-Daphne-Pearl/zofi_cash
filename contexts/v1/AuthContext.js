import { createContext, useContext, useState } from "react";
import {
  forgotPasswordApi,
  loginApi,
  registerApi,
  resetPasswordApi,
  setSecurityAnswerApi,
  verifyEmailOrPhoneApi,
} from "../../pages/api/v1/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  // Verify using phone or email
  const verifyEmailOrPhone = async (activeTab, values) => {
    try {
      await verifyEmailOrPhoneApi(activeTab, values);
    } catch (error) {
      throw new Error(`Failed to verify ${activeTab}: ${error.message}`);
    }
  };
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

  const resetPassword = async (security_answer, password) => {
    try {
      await resetPasswordApi(security_answer, password);
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

  const setSecurityAnswer = async (security_question, security_answer) => {
    try {
      await setSecurityAnswerApi(security_question, security_answer);
      setError(null);
    } catch (error) {
      setError("Failed to set security answer");
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
        setSecurityAnswer,
        verifyEmailOrPhone,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
