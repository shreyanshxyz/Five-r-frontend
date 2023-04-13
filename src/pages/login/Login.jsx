import React, { useState } from "react";
import "./Login.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="login">
      <form>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input name="username" type="text" placeholder="johndoe" />

        <label htmlFor="">Password</label>
        <input name="password" type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
