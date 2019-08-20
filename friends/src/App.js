import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom'

import Login from './components/Login'


function App() {
  return (
    <div className="App">
      <Link to='/login'>Login</Link>
      <Route path='/login' component={Login} />
    </div>
  );
}

export default App;
