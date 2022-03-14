import classNames from "classnames";
import logo from "../../images/unnamed.jpg";
import Button from "../common/button";
import "./header.css";
function Header({ className }) {
  return (
    <header className={classNames("header", className)}>
      <div>
        <img className="icono-header" src={logo} alt="Products-React"></img>
      </div>
      <nav className="header-nav">
        <Button className="header-button" variant="primary">
          Login
        </Button>
      </nav>
    </header>
  );
}

export default Header;
