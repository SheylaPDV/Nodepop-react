import Header from "../header/header.js";
import '../../assets/css/layout.css';
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <div className="layout">
      <Header className="layout-header bordered" />
      <main className="layout-main bordered">
        <Outlet />
      </main>
      <footer className="layout-footer bordered">© 2022 Keepcoding</footer>
    </div>
  );
}

export default Layout;

