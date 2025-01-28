import React, { useState } from 'react';
import '../styles/LoginSignup.css';
import Login from './Login';
import Signup from './Signup';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      {action === 'Login' ? <Login /> : <Signup />}
      <div className='submit-container'>
        <div className={action === 'Login' ? 'submit gray' : 'submit'} onClick={() => { setAction('Signup') }}>Sign Up</div>
        <div className={action === 'Signup' ? 'submit gray' : 'submit'} onClick={() => { setAction('Login') }}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup;
