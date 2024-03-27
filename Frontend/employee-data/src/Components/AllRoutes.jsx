// AllRoutes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';

const AllRoutes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />

        </Switch>
      </div>
    </Router>
  );
};

export default AllRoutes;
