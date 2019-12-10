import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Businesses from './components/Businesses';
import BusinessDetails from './components/BusinessDetails';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <Redirect to="/businesses" />} exact />
        <Route path="/businesses" render={() => <Businesses />} exact />
        <Route
          path="/business-details/:id"
          render={props => <BusinessDetails {...props} />}
          exact
        />
        <Route render={() => <NotFound />} />
      </Switch>
    </Router>
  );
};

export default App;
