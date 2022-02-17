import React, { useState, useMemo, createContext } from "react";

export const UserContext = createContext({
  user: {},
  setUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const value = useMemo(() => ({ user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
