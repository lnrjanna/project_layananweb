import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika pendaftaran pembeli akan ditambahkan di sini
    console.log('Sign up attempt:', { fullName, email, password, agreeTerms });
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-left-panel">
    
        </div>
        <div className="signup-right-panel">
          <h1 className="signup-title">Sign Up</h1>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            
            <div className="terms-agreement">
              <input
                type="checkbox"
                id="agree-terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                required
              />
              <label htmlFor="agree-terms">I agree</label>
            </div>
            
            <button type="submit" className="create-account-btn">Create Account</button>
          </form>
          
          <div className="signin-link">
            <p>Already have an account? <a href="#">Sign In</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;