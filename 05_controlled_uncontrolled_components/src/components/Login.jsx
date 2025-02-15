import { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("username", username);
    console.log("password", password);

    // handleAPI(username, password)
  };

  // const fieldChangeHandler = (e) => {
  //   console.log(e.target.value);

  //   setUserName(e.target.value);
  // };

  return (
    <div className="login-container">
      <h2>Login </h2>
      <form onSubmit={submitHandler}>
        <div className="field-container">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="field-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
