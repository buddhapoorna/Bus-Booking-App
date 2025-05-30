import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
   
    console.log("Logging in with", email, password);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <Link to="/forgotpassword" className="forgot-password-link">Forgot Password?</Link><br/><br/>
        <button type="submit" className="btn">Login</button>
      </form>
      <div className="links">
        
        <Link to="/signup" className="signup-link">Don't have an account? Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
