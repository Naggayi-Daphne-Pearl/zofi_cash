import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // login implementation
  };

  const logout = () => {
    // logout implementation
  };

  const register = (userData) => {
    // register implementation
  };

  const resetPassword = (userData) => {
    // reset password implementation
  };

  const value = {
    user,
    login,
    logout,
    register,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
