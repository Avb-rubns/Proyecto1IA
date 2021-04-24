import { createContext, useState } from "react";

const Context = createContext({});

export function SessionContextProvider({ children }) {
  const [token, setToken] = useState(null);
  return (
    <Context.Provider value={{ token, setToken }}>{children}</Context.Provider>
  );
}
export default Context;
