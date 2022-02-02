import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './pages/404';
import HomePage from './pages/Home';
import SignInPage from './pages/SignIn';
import TabDzikirPage from './pages/TabDzikir';
import PrivateRoute from './routes/PrivateRoutes';

function App() {
  return (
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
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
}

export default App;
