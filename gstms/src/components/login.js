import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './App.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    alert("username and password entered successfully");
  };

  return (
    <div className='container'>
      <div className="login-form">
        <div className="header">
          <h1>Hello</h1>
          <p>To Keep connected with us please login</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email Address"
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember</label>
            <Link to="/Forgot">Forgot password?</Link>
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="footer">
          <p>Don't have an account? <Link to="/Register">Register</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;