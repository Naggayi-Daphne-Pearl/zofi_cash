import { createContext, useContext, useState } from "react";
import { verifyEmailOrPhoneApi } from "../../pages/api/v2/post.verify-email-or-phone.api";
import { registerUser } from "../../pages/api/v2/post.register-account.api";
import { loginUser } from "../../pages/api/v2/post.login-account.api";
import { resetPasswordApi } from "../../pages/api/v2/post.reset-password.api";
import { securityAnswerApi } from "../../pages/api/v2/post.security-question.api";
import { verifyAccountApi } from "../../pages/api/v2/get.verify-account.api";
import { forgotPasswordApi } from "../../pages/api/v2/get.forgot-password.api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  //   Login user
  const login = async (email, password, phone_number) => {
    try {
      const response = await loginUser(email, password, phone_number);
      setUser(response.data.user);
      setError(null);
    } catch (error) {
      setError("Invalid email or password");
      throw error;
    }
  };

  //   register user
  const register = async (userData) => {
    try {
      const response = await registerUser(userData);
      setUser(response.data.user);
      setError(null);
    } catch (error) {
      setError("Registration failed");
      throw error;
    }
  };

  // resetting password
  const resetPassword = async (password) => {
    try {
      await resetPasswordApi(password);
      setError(null);
    } catch (error) {
      setError("Failed to reset password");
      throw error;
    }
  };

  const forgotPassword = async (security_answer, security_question) => {
    try {
      await forgotPasswordApi(security_answer, security_question);
      setError(null);
    } catch (error) {
      setError("Failed to reset password");
      throw error;
    }
  };

  // set security answer
  const setSecurityAnswer = async (security_question, security_answer) => {
    try {
      await securityAnswerApi(security_question, security_answer);
      setError(null);
    } catch (error) {
      setError("Failed to set security answer");
      throw error;
    }
  };

  // verify account
  const setVerifyAccount = async (email, phone_number, verificationCode) => {
    try {
      await verifyAccountApi(email, phone_number, verificationCode);
      setError(null);
    } catch (error) {
      setError("Failed to verify account");
      throw error;
    }
  };
  const logout = () => {
    setUser(null);
  };

  // verify using phone or email
  const verifyEmailOrPhone = async (activeTab, values) => {
    try {
      await verifyEmailOrPhoneApi(activeTab, values);
    } catch (error) {
      throw new Error(`Failed to verify ${activeTab}: ${error.message}`);
    }
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
        setVerifyAccount,
        verifyEmailOrPhone,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
