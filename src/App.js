import ProductsPage from "./components/productsPage/ProductsPage";
import Button from "./components/button/button";
import NewProductPage from "./components/createProduct/NewProductPage";
import { useState } from "react";
import LoginPage from "./components/login/LoginPage";

function App(isInitiallyLogged) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);
  
  
  const handleLogin = () => {
    setIsLogged(true);
  };
  
  return (
    <div className="App">
      {/* <ProductsPage />
      <NewProductPage />
      <ProductsPage />
       */}
       {/* <LoginPage></LoginPage> */}
      {isLogged ? <ProductsPage isLogged={isLogged} /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
