import { createContext } from "react";
import { useState } from "react";

export const userContext = createContext();

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({});
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}
