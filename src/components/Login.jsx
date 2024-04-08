import React, { useState } from "react";
import { getAllUsers, login } from "../API";
import {useNavigate} from "react-router";
import "./Login.css"

const Login = ({setToken}, setUser, setCart) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Call your login function here with username and password
    const token = await login(username, password);
    const user = await getAllUsers(username)
    console.log("user--->", user)
    setToken(token);// got token
    setPassword("");// reset blank
    setUsername("");
    navigate("/")//after all done navigate to the home page
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;