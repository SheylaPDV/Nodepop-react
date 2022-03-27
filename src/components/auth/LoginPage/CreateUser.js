import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import T from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../common/button';
import FormField from '../../common/FormField';
import { signUp } from '../service';

function CreateUser({ onLogin }) {
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(ref.current);
    ref.current.focus();
  }, []);

  const { email, password } = credentials;

  const handleChange = useCallback((event) => {
    setCredentials((credentials) => ({
      ...credentials,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const resetError = () => setError(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      resetError();
      setIsLoading(false);
      await signUp(credentials);
      setIsLoading(true);
      onLogin();
      const from = location.state?.from?.pathname || '/products';
      navigate(from, { replace: true });
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const buttonDisabled = useMemo(() => {
    console.log('calculando...');
    return !email || !password || isLoading;
  }, [email, password, isLoading]);

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Create user</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="email"
          label="email"
          className="loginForm-field"
          value={credentials.email}
          onChange={handleChange}
          // ref={ref}
        />
        <FormField
          type="password"
          name="password"
          label="password"
          className="loginForm-field"
          value={credentials.password}
          onChange={handleChange}
          ref={ref}
        />

        <Button
          className="loginForm-submit"
          type="submit"
          variant="primary"
          disabled={buttonDisabled}
        >
          Log in
        </Button>
      </form>
      {error && (
        <div onClick={resetError} className="loginPage-error">
          {error.message}
        </div>
      )}
    </div>
  );
}

CreateUser.propTypes = {
  onLogin: T.func,
};

export default CreateUser;
