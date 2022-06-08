import T from "prop-types";
import "../../../assets/css/FormField.css";
import Button from "../../common/button";

import useForm from "../../hooks/useForm";
import "../../../assets/css/LoginPage.css";
import FormField from "../../common/FormField";

const validEmail = ({ email }) => email;
const validPassword = ({ password }) => password;

function LoginForm({ onSubmit }) {
  const {
    formValue: credentials,
    handleChange,
    handleSubmit,
    validate,
  } = useForm({
    email: "",
    password: "",
    remember: false,
  });
  const { email, password, remember } = credentials;

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to Nodepop</h1>
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <FormField
          className="loginForm-field"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormField
          className="loginForm-field"
          //   className="formField-label"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="remember"
          checked={remember}
          onChange={handleChange}
        />
        <label>Recordar contraseña</label>
        <Button
          className="loginForm-submit"
          disabled={!validate(validEmail, validPassword)}
        >
          Login
        </Button>
      </form>
    </div>
    //  <div className="loginPage">
    //       {renders}
    //       <h1 className="loginPage-title">Log in to Nodepop</h1>
    //       <form className="loginForm" onSubmit={handleSubmit}>
    //         <FormField
    //           type="text"
    //           name="email"
    //           label="email"
    //           className="loginForm-field"
    //           value={credentials.email}
    //           onChange={handleChange}
    //         />
    //         <FormField
    //           type="password"
    //           name="password"
    //           label="password"
    //           className="loginForm-field"
    //           value={password}
    //           onChange={handleChange}
    //           ref={ref}
    //         />
    //         <input
    //           type="checkbox"
    //           name="remember"
    //           checked={remember}
    //           value="remember"
    //           onChange={handleChange}
    //         />
    //         <label>Recordar contraseña</label>

    //         <Button
    //           className="loginForm-submit"
    //           type="submit"
    //           variant="primary"
    //           disabled={buttonDisabled}
    //         >
    //           Log in
    //         </Button>
  );
}

LoginForm.propTypes = {
  onSubmit: T.func.isRequired,
};

export default LoginForm;
