import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Original from '../src/Components/Original';
import Header from '../src/Components/Header';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import RefreshHandler from './Components/RefreshHandler';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const PrivateRoute = ({element}) => {
    return isAuth ? element : <Navigate to='/login' />
  }

  return (
      <div className="App">
        <RefreshHandler setIsAuth={setIsAuth}/>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/login' element={
            <>
              <Header />
              <Login />
            </>
          } />
          <Route path='/signup' element={
            <>
              <Header />
              <Signup />
            </>
          } />
          <Route path='/home' element={<PrivateRoute element={<Original />} />} />
        </Routes>
      </div>
  );
}

export default App;
