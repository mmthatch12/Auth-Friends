import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'

import Login from './components/Login'
import FriendList from './components/FriendList'
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <div className="App">
      <Link to='/'>Home</Link> {' '}
      <Link to='/login'>Login</Link>
      
      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/protected' component={FriendList} />
    </div>
  );
}

export default App;
