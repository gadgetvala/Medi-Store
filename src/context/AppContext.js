import React, { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [notificationToastValue, setNotificationTostValue] = useState("");

  console.log(user);
  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        notificationToastValue,
        setNotificationTostValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
