import { useMemo, useState } from "react";
import Button from "../button/button";
import { login } from "../auth/service";
import FormField from "../formField/FormField";
import '../../assets/css/LoginPage.css'


function LoginPage({ onLogin }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    remember: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { username, password, remember } = credentials;
  //   const {username, ...rest} = credentials: // rest es todo lo que no sea username, te devuelve un objeto con todo lo demas

  const handleChange = (event) => {
    setCredentials((credentials) => ({
      ...credentials, //cojo el estado antiguo
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value, //cojo el estado nuevo, con value. y con name el nombre del dato que me viene
    }));
  };

  const resetError = () => setError(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    login(credentials)

    try {
      resetError(); //limpiar error
      setIsLoading(true);
      await login(credentials);
      setIsLoading(false);
      onLogin();
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const buttonDisabled = useMemo(() => {
    console.log('calculando...');
    return !username || !password || isLoading;
  }, [username, password, isLoading]);


  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to Twitter</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="username"
          label='phone, email or username'
          className="loginForm-field"
          value={username}
          onChange={handleChange}
        />
        <FormField
          type="password"
          name="password"
          label="password"
          className="loginForm-field"
          value={password}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="remember"
          checked={remember}
          value="remember"
          onChange={handleChange}
        />
        <select value="2" onChange={(event) => console.log(event)}>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <input
          type="file"
          onChange={(event) => console.log(event.target.files[0])}
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
export default LoginPage;
