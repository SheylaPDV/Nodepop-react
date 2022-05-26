import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from "./components/auth/RequireAuth";
import AdvertPage from "./components/adverts/AdvertPage/AdverttPage";
import AdvertsPage from "./components/adverts/advertsPage/AdvertsPage";
import { AuthContextProvider } from "./components/auth/context";
import Layout from "./components/layout/layout";
import LoginPage from "./components/auth/LoginPage/LoginPage";
import NewAdvertPage from "./components/adverts/NewAdvertPage/NewAdvertPage";
import NotFoundPage from "./NotFoundPage";

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  //ESTADOS
  const handleLogin = () => {
    setIsLogged(true);
  };
  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div className="App">
      <AuthContextProvider value={{ isLogged, handleLogin, handleLogout }}>
        <Routes>
          <Route
            path="/adverts"
            element={
              <RequireAuth>
                <Layout />
              </RequireAuth>
            }
          >
            <Route index element={<AdvertsPage />} />
            <Route path="new" element={<NewAdvertPage />} />
            <Route path=":advertId" element={<AdvertPage />} />
          </Route>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/404" element={<Layout />}>
            <Route index element={<NotFoundPage />} />
          </Route>

          <Route path="/" element={<Navigate to="/adverts" />} />

          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
