import { createContext, useState } from "react";

export const ActiveContext = createContext();

export const ActiveContextProvider = ({ children }) => {
  const [active, setActive] = useState();

  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
};
