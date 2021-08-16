import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import SignInPage from './pages/SignIn';
import TabDzikirPage from './pages/TabDzikir';
import PrivateRoute from './routes/PrivateRoutes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <SignInPage />
        </Route>
        <PrivateRoute path="/" exact>
          <HomePage />
        </PrivateRoute>
        <PrivateRoute path="/tab-dzikir/:id">
          <TabDzikirPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
