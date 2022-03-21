import ProductsPage from "./components/productsPage/ProductsPage";
import Button from "./components/button/button";
import NewProductPage from "./components/createProduct/NewProductPage";
import { useState } from "react";
import LoginPage from "./components/login/LoginPage";
import FormField from "./components/formField/FormField";

function App(isInitiallyLogged) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);
  
  
  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  }
  
  return (
    <div className="App">
      {/* <ProductsPage />
      <NewProductPage />
      <ProductsPage /> */}
      
       <LoginPage></LoginPage>
       {/* <FormField></FormField> */}
      {isLogged ? <ProductsPage isLogged={isLogged} /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;
