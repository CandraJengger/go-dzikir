import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import SignInPage from './pages/SignIn';
import TabDzikirPage from './pages/TabDzikir';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <SignInPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/tab-dzikir">
          <TabDzikirPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
