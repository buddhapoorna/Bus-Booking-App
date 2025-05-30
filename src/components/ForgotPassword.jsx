import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Add your reset password logic here
    console.log("Sending reset password link to", email);
  };

  return (
    <div className="forgot-password-container">
      <h2 className="forgot-password-title">Forgot Password</h2>
      <form onSubmit={handleResetPassword}>
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
        <button type="submit" className="btn">Reset Password</button>
      </form>
      <div className="links">
        <Link to="/login" className="login-link">Remember your password? Login</Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
