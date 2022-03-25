import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RequireAuth from './components/auth/RequireAuth';
import ProductPage from './components/products/ProductPage/ProductPage';
import ProductsPage from './components/products/productsPage/ProductsPage';
import { AuthContextProvider } from './components/auth/context';
import Layout from './components/layout/layout';
import LoginPage from './components/auth/LoginPage/LoginPage';
import NewProductPage from './components/products/NewProductPage/NewProductPage';

/////////////////////////////////////////////////////////

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  /////////////////////////////////////////////////////////
  //ESTADOS
  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  /////////////////////////////////////////////////////////

  return (
    <div className="App">
      <AuthContextProvider value={{ isLogged, handleLogin, handleLogout }}>
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/products" element={<Layout />}>
            <Route index element={<ProductsPage />} />
            <Route path=":productId" element={<ProductPage />} />
            <Route //protegido , no puedes acceder si no estas logeado
              path="/products/new"
              element={
                <RequireAuth>
                  <NewProductPage />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/404" element={<div>404 | Not Found Page</div>} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

/////////////////////////////////////////////////////////

export default App;
