import { createContext, useContext, useState, useEffect } from 'react';
import { getLatestProducts } from '../service';

const AuthContext = createContext();

export const AuthContextProvider = AuthContext.Provider;
export const AuthContextConsumer = AuthContext.Consumer;

/////////////////////////////////////////////////////////

export function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

/////////////////////////////////////////////////////////

export const useProducts = () => {
  //Hooks
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const execute = async () => {
      const products = await getLatestProducts();
      setProducts(products);
    };
    execute();

    return () => {};
  }, []);

  return products;
};

/////////////////////////////////////////////////////////

export default AuthContext;
