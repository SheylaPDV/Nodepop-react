import { useState } from "react";
import Button from "../../common/button";

function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const {username, password} = credentials;

  const handleChange = (event) => {
    setCredentials(credentials => ({ 
      ...credentials,//cojo el estado antiguo
      [event.target.name]: event.target.value,//cojo el estado nuevo, con value. y con name el nombre del dato que me viene
    }));
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log('call to api', credentials)
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
        <Button type="submit" variant="primary" disabled={!username || !password}>
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
