import ProductsPage from "./components/products/ProductsPage.js";
import Button from "./components/common/button.js";
import NewProductPage from "./components/products/NewProductPage/NewProductPage.js";
import { useState } from 'react';
import classNames from "classnames";
import LoginPage from "./components/auth/loginPage/LoginPage.js";



function App() {
  const container = true;
  return (
    <div className={classNames("App", { container })}>
      {/* <ProductsPage />
      <NewProductPage />
      <ProductsPage />
       */}
       <LoginPage></LoginPage>
    </div>
  );
}

export default App;
