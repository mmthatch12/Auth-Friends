import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'

import Login from './components/Login'
import FormikFriendList from './components/FriendList'
import PrivateRoute from './components/PrivateRoute'


function App() {
  return (
    <div className="App">
      <Link to='/'>Home</Link> {' '}
      <Link to='/login'>Login</Link> {' '}
      <Link to='/friendslist'>Friends</Link>
      
      <Route path='/login' component={Login} />
      <PrivateRoute exact path='/protected' component={FormikFriendList} />
    </div>
  );
}

export default App;
