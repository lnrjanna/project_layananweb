import React, { useState } from 'react';
import './SignIn.css';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika autentikasi pembeli akan ditambahkan di sini
    console.log('Sign in attempt:', { username, password, rememberMe });
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <div className="signin-left-panel">
          {/* Area kosong untuk desain, tanpa gambar sepatu */}
        </div>
        <div className="signin-right-panel">
          <h1 className="signin-title">Sign In</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="remember-me"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              
              <div className="forgot-password">
                <a href="#">forgot password?</a>
              </div>
            </div>
            
            <button type="submit" className="submit-btn">Submit</button>
          </form>
          
          <div className="signup-link">
            <p>Don't have an account? <a href="#">Sign Up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;