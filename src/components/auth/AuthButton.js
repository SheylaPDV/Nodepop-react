import { Link, NavLink } from "react-router-dom";
import { logout } from "./service";
import { useAuth, AuthContextConsumer } from "./context";
import useMutation from "../hooks/useMutation";
import ConfirmationButton from "../common/ConfirmationButton";
import "../../assets/css/Button.css";
import "../../assets/css/header.css";

import Button from "../common/button";

function AuthButton({ className }) {
  const { isLogged, handleLogout } = useAuth();
  const mutation = useMutation(logout);

  const handleLogoutClick = async () => {
    // await logout();
    await mutation.execute();
    handleLogout();
  };

  return isLogged ? (
    <ConfirmationButton
      // className="header-nav"
      // style={{ color: "green" }}
      confirmation="Are you sure?"
      className={className}
      onConfirm={handleLogoutClick}
    >
      Logout
    </ConfirmationButton>
  ) : (
    <Link to="/login">Login</Link>
  );
}
const ConnectedAuthButton = (props) => (
  <AuthContextConsumer>
    {(auth) => <AuthButton {...auth} {...props} />}
  </AuthContextConsumer>
);

export default ConnectedAuthButton;

// export default AuthButton;
