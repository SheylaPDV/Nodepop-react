import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/unnamed.jpg";
import "../../assets/css/header.css";
import AuthButton from "../auth/AuthButton";
import Button from "../common/button";

function Header({ className }) {
  return (
    <header className={classNames("header", className)}>
      <Link to="/">
        <div className="header-logo">
          <img src={logo} className="Loooooo" alt="Nodepop-React"></img>
          {/* <Icon width="32" height="32" /> */}
        </div>
      </Link>
      <nav className="header-nav">
        <NavLink
          to="/adverts/new"
          style={({ isActive }) => (isActive ? { color: "green" } : null)}
        >
          <Button>New product</Button>
        </NavLink>
        <NavLink
          to="/adverts"
          style={({ isActive }) => (isActive ? { color: "green" } : null)}
          end
        >
          <Button>All adverts</Button>
        </NavLink>
        {/* <NavLink
          to="/signup"
          style={({ isActive }) => (isActive ? { color: "green" } : null)}
          end
        ></NavLink> */}

        <AuthButton className="header-button" />
      </nav>
    </header>
  );
}

export default Header;
