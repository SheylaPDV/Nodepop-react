import { createContext, useContext, useState, useEffect } from "react";
import { getLatestAdverts } from "../service";

const AuthContext = createContext();

export const AuthContextProvider = AuthContext.Provider;
export const AuthContextConsumer = AuthContext.Consumer;

export function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

export const useAdverts = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    const execute = async () => {
      const adverts = await getLatestAdverts();
      setAdverts(adverts);
    };
    execute();

    return () => {};
  }, []);

  return adverts;
};

export default AuthContext;
