import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const { handleLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(loginData);
  };

  const handleChange = (e) => {
    if (e.target.value) {
      setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="field-wrapper">
          <label htmlFor="userName">Username</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={loginData.userName}
            onChange={handleChange}
          />
        </div>

        <div className="field-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>

        <div className="field-wrapper">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
