import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ loggedInUser, handleLogout }) => {
  const Navigate = useNavigate();

  const handleLoginClick = () => {
    Navigate('/login');
  };

  const handleSignupClick = () => {
    Navigate('/signup');
  };

  return (
    <div className="header-container">
      <div className="header-title">SORTIFY - Interactive Sorting Visualizer</div>
      <div className="header-login">
        {loggedInUser && (
          <div className="logged-in-user">
            <span>Welcome, {loggedInUser}</span>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
        {!loggedInUser && (
          <button className="login-button" onClick={handleLoginClick}>
            Login
          </button>
        )}
        {!loggedInUser && (
          <button className="login-button" onClick={handleSignupClick}>
            Signup
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
