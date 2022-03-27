import { Link } from 'react-router-dom';
import Button from '../common/button.js';
import { logout } from './service';
import { useAuth } from './context';

function AuthButton({ className }) {
  const { isLogged, handleLogout: onLogout } = useAuth();

  const handleLogoutClick = async () => {
    await logout();
    onLogout();
  };

  return isLogged ? (
    <Button className={className} onClick={handleLogoutClick}>
      Logout
    </Button>
  ) : (
    <Button as={Link} to="/login" variant="primary" className={className}>
      Login
    </Button>
  );
}

export default AuthButton;
