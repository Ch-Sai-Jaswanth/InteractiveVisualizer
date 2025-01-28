import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import SortingVisualizer from './SortingVisualizer';
import { handleSuccess } from '../utils/values';
import { ToastContainer } from 'react-toastify';
import '../styles/Original.css';

const Original = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const Navigate = useNavigate();

  useEffect(() => {
    setLoggedInUser(localStorage.getItem('loggedInUser'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('Logged Off successfully');
    setTimeout(() => {
      Navigate('/login');
    }, 1000);
  };

  return (
    <div className="original-container">
      <Header loggedInUser={loggedInUser} handleLogout={handleLogout} />
      <div className="content-container">
        <SortingVisualizer />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Original;
