import { createContext } from "react";

export const AuthContextNew = createContext();

export const AuthContextNewProvider = ({ children }) => {
  return (
    <AuthContextNew.Provider
      value={{ user: { name: "testtttt", age: 32 }, data: [1, 2, 3, 4] }}
    >
      {children}
    </AuthContextNew.Provider>
  );
};
