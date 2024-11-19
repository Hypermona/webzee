import React from "react";
import { ReactNode, useState } from "react";

export const AuthContext = React.createContext<{
  isAuth: boolean;
  updateAuth?: (value: boolean) => void;
}>({ isAuth: false, updateAuth: undefined });

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  function updateAuth(value: boolean) {
    setIsAuth(value);
  }

  return <AuthContext.Provider value={{ isAuth, updateAuth }}>{children}</AuthContext.Provider>;
}
