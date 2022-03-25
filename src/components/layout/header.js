import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/unnamed.jpg';
import '../../assets/css/header.css';
import AuthButton from '../auth/AuthButton';

// import { ReactComponent as Icon } from "../../assets/images/wp.svg";
/////////////////////////////////////////////////////////

function Header({ className }) {
  return (
    <header className={classNames('header', className)}>
      <Link to="/">
        <div className="header-logo">
          <img src={logo} className="Loooooo" alt="Nodepop-React"></img>
          {/* <Icon width="32" height="32" /> */}
        </div>
      </Link>
      <nav className="header-nav">
        <NavLink
          to="/products/new"
          // className={({ isActive }) => (isActive ? 'active' : '')}
          style={({ isActive }) => (isActive ? { color: 'green' } : null)}
        >
          Nuevo producto
        </NavLink>
        <NavLink
          to="/products"
          // className={({ isActive }) => (isActive ? 'active' : '')}
          style={({ isActive }) => (isActive ? { color: 'green' } : null)}
          end
        >
          Todos los productos
        </NavLink>
        <AuthButton className="header-button" />
      </nav>
    </header>
  );
}

export default Header;
