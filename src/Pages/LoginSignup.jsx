import React, { useState } from 'react';
import './CSS/LoginSignup.css'; 

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);

    console.log('Login Form Submitted!');
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <form method="POST" onSubmit={handleLogin}>
          <div className="loginsignup-fields">
            <input
              type="email"
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button>Login</button>
          <p className="loginsignup-login">
            Don't have an account? <span>Sign Up here</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;

