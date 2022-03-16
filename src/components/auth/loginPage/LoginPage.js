import { useState } from "react";
import Button from "../../common/button";
import { login } from "../service";

function LoginPage({ onLogin }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    remember: false,
  });
  const { username, password, remember } = credentials;
  //   const {username, ...rest} = credentials: // rest es todo lo que no sea username, te devuelve un objeto con todo lo demas

  const handleChange = event => {
    setCredentials(credentials => ({
      ...credentials, //cojo el estado antiguo
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value, //cojo el estado nuevo, con value. y con name el nombre del dato que me viene
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const { accessToken } = await login(credentials);

      onLogin();
      console.log("logged", accessToken);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Login to Nodepop</h1>
      <form onSubmit={handleSubmit}></form>
      <form>
        <input
          type="text"
          name="username"
          placeholder="correo electronico"
          value={username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="contraseña"
          value={password}
          onChange={handleChange}
        />

        <input
          type="checkbox"
          name="remember"
          checked={remember}
          onChange={handleChange}
        />

        {/* <select value={desplegable} onChange={handleChange} >
            <option value="1">nombre</option>
            <option value="2">tags</option>
            <option value="3">precio</option>
            <option value="4">compra o venta</option>
        </select> */}

        {/* <input
          type="file"
          onChange={(event) => console.log(event.target.files)}
        ></input> */}

        <Button
          type="submit"
          variant="primary"
          disabled={!username || !password}
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
