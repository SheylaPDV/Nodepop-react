import classNames from "classnames";
import logo from "../../assets/images/unnamed.jpg";
import Button from "../button/button.js";
import "../../assets/css/header.css";


function Header({ className, isLogged }) {
  return (
    <header className={classNames("header", className)}>
      <div>
        <img className="icono-header" src={logo} alt="Products-React"></img>
      </div>

      <nav className="header-nav">
        {isLogged ? (
          <Button className="header-button">Logout</Button>
        ) : ( 
          <Button variant="primary" className="header-button">
            Login
          </Button>
        )}
      </nav>
    </header>
  );
}

export default Header;
