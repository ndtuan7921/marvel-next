"use client";
import { ReactNode, createContext } from "react";

export const UserContext = createContext({
  email: "tuan@gmail.com",
  password: "abc",
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <UserContext.Provider
      value={{
        email: "tuan@gmail.com",
        password: "abc",
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
