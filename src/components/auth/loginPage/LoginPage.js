import { useState } from "react";
import Button from "../../common/button";

function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setCredentials(credentials => ({ 
      ...credentials,//cojo el estado antiguo
      [event.target.name]: event.target.value,//cojo el estado nuevo, con value. y con name el nombre del dato que me viene
    }));
  };

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Login to Nodepop</h1>
      <form>
        <input
          type="text"
          name="username"
          placeholder="correo electronico"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="contraseña"
          value={setCredentials.password}
          onChange={handleChange}
        />
        <Button type="submit" variant="primary">
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
