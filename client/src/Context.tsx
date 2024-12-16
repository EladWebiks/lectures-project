import React, { createContext, useContext } from "react";

interface MyContextType {
  Links: Record<string,string>
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export const MyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const value: MyContextType = {
    Links: {about: "about", gallery: "gallery"}
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
