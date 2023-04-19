import { createContext, useContext, useState } from "react";
// import {
//   forgotPasswordApi,
//   loginApi,
//   registerApi,
//   resetPasswordApi,
//   setSecurityAnswerApi,
//   verifyEmailOrPhoneApi,
// } from "../../pages/api/v1/auth";
import { registerUser } from "../../pages/api/v2/post.register-account.api";
import { loginUser } from "../../pages/api/v2/post.login-account.api";
import { resetPasswordApi } from "../../pages/api/v2/get.reset-password.api";
import { securityAnswerApi } from "../../pages/api/v2/post.security-question.api";

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
  const resetPassword = async (
    email,
    security_question,
    security_answer,
    newPassword
  ) => {
    try {
      await resetPasswordApi(
        email,
        security_question,
        security_answer,
        newPassword
      );
      setError(null);
    } catch (error) {
      setError("Failed to reset password");
      throw error;
    }
  };

  //   const forgotPassword = async (email) => {
  //     try {
  //       await forgotPasswordApi(email);
  //       setError(null);
  //     } catch (error) {
  //       setError("Failed to reset password");
  //       throw error;
  //     }
  //   };

  //   const setSecurityAnswer = async (security_question, security_answer) => {
  //     try {
  //       await setSecurityAnswerApi(security_question, security_answer);
  //       setError(null);
  //     } catch (error) {
  //       setError("Failed to set security answer");
  //       throw error;
  //     }
  //   };

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
        // forgotPassword,
        logout,
        resetPassword,
        setSecurityAnswer,
        // verifyEmailOrPhone,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
