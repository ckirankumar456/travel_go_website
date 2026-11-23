import React, { createContext, useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [registeredUser, setRegisteredUser] = useState(null);
  const register = (userData) => {
    setRegisteredUser(userData);
  };
  const login = (email, password) => {
    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      setUser(registeredUser);
      return true;
    }
    return false;
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        registeredUser,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
