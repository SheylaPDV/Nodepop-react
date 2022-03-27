import { useMemo, useState, useCallback, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../common/button';
import { login } from '../service';
import FormField from '../../common/FormField';
import '../../../assets/css/LoginPage.css';
import T from 'prop-types';

///////////////////////////TE DICE CUANTAS VECES SE RENDERIZA ALGO(SE ALMACENA EN CURRENT QUE ESTA EN EL OBJETO QUE DEVUELVE USEREF)//////////////////////////////

function useRenders() {
  const count = useRef(1);

  useEffect(() => {
    count.current++;
  });
  return count.current;
}

//////////////////////PAGINA INICIO SESION///////////////////////////////////

function LoginPage({ onLogin }) {
  const renders = useRenders();
  const ref = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    remember: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(ref.current);
    ref.current.focus();
  }, []);

  /////////////////////////////////////////////////////////

  const { email, password, remember } = credentials;

  /////////////////////////MANEJAR CAMBIO////////////////////////////////

  const handleChange = useCallback((event) => {
    //el useCallback se usa para que esta funcion siempre sea la misma, que ocupe el mismo espacio de memoria
    setCredentials((credentials) => ({
      ...credentials,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
    }));
  }, []);

  ////////////////////////////RESETEAR ERROR/////////////////////////////

  const resetError = () => setError(null);

  ///////////////////// MANEJAR ENVIAR ////////////////////////////////////

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      resetError();
      setIsLoading(true);
      await login(credentials);
      setIsLoading(false);
      onLogin();
      const from = location.state?.from?.pathname || '/products';
      navigate(from, { replace: true });
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  //////////////////////BOTON DESHABILITADO///////////////////////////////////
  //...... (con use memo, una especie de memoria cache, si te pasan los mismos datos no lo recalcula de nuevo)

  const buttonDisabled = useMemo(() => {
    console.log('calculando...');
    return !email || !password || isLoading;
  }, [email, password, isLoading]);

  /////////////////////////JSX////////////////////////////////

  return (
    <div className="loginPage">
      {renders}
      <h1 className="loginPage-title">Log in to Nodepop</h1>
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
          value={password}
          onChange={handleChange}
          ref={ref}
        />
        <input
          type="checkbox"
          name="remember"
          checked={remember}
          value="remember"
          onChange={handleChange}
        />
        <label>Recordar contraseña</label>

        {/* // <select value="2" onChange={event => console.log(event)}>
        //   <option value="1">Option 1</option>
        //   <option value="2">Option 2</option>
        //   <option value="3">Option 3</option>
        // </select>
        // <input */}
        {/* //   type="file"
        //   onChange={event => console.log(event.target.files[0])}
        // /> */}

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

LoginPage.propTypes = {
  onLogin: T.func,
};

export default LoginPage;
