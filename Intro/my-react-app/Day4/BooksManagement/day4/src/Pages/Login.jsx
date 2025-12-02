import React from 'react'
import "./Login.css";

function Login() {
  return (
    <div className="login-wrapper">
      <form className="login-card">

        <h3>Login</h3>

        <label>Username:</label>
        <input type="text" name="username" placeholder="Enter username" />

        <label>Password:</label>
        <input type="password" name="password" placeholder="Enter password" />

        <button className="login-btn">Login</button>

        <p className="signup-text">
          Don't have an account? <a href="/signup">Signup</a>
        </p>

      </form>
    </div>
  )
}

export default Login;
