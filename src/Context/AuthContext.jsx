import { createContext, useEffect } from "react";
import { useState } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userLoginData = JSON.parse(localStorage.getItem("userData"));
    if (userLoginData) {
      setUserData(userLoginData);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
