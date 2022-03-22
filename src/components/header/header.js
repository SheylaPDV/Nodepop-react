import classNames from "classnames";
import { Link, NavLink } from 'react-router-dom'
import logo from "../../assets/images/unnamed.jpg";
import "../../assets/css/header.css";
import AuthButton from '../button/AuthButton'


function Header({ className }) {
  return (
    <header className={classNames('header', className)}>
      <Link to="/">
        <div className="header-logo">
          <img src={logo} alt="Nodepop-React"></img>
          {/* <Icon width="32" height="32" /> */}
        </div>
      </Link>
      <nav className="header-nav">
        <NavLink
          to="/products/new"
          // className={({ isActive }) => (isActive ? 'active' : '')}
          style={({ isActive }) => (isActive ? { color: 'green' } : null)}
        >
          New Product
        </NavLink>
        <NavLink
          to="/products"
          // className={({ isActive }) => (isActive ? 'active' : '')}
          style={({ isActive }) => (isActive ? { color: 'green' } : null)}
          end
        >
          See all products
        </NavLink>
        <AuthButton className="header-button" />
      </nav>
    </header>
  );
}

export default Header;
