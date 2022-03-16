import ProductsPage from "./components/products/ProductsPage.js";
import Button from "./components/common/button.js";
import NewProductPage from "./components/products/NewProductPage/NewProductPage.js";
import { useState } from "react";
import LoginPage from "./components/auth/loginPage/LoginPage.js";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };
  return (
    <div className="App">
      {/* <ProductsPage />
      <NewProductPage />
      <ProductsPage />
       */}
      {isLogged ? <ProductsPage isLogged={isLogged} /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
