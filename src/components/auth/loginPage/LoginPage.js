import { useState } from "react";
import Button from "../../common/button";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Login to Nodepop</h1>
      <form>
        <input
          type="text"
          name="username"
          placeholder="correo electronico"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="contraseña"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="submit" variant="primary">
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
