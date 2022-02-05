import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './pages/404';
import HomePage from './pages/Home';
import Quran from './pages/Quran';
import SignInPage from './pages/SignIn';
import TabDzikirPage from './pages/TabDzikir';
import PrivateRoute from './routes/PrivateRoutes';
import ReadingQuranPage from './pages/ReadingQuran';

function App() {
  return (
    <Switch>
      <Route path="/login">
        <SignInPage />
      </Route>
      <PrivateRoute path="/" exact>
        <HomePage />
      </PrivateRoute>
      <PrivateRoute
        path="/quran"
        render={({ match: { url } }) => (
          <>
            <Route path={`${url}/`} component={Quran} exact />
            <Route path={`${url}/:id`} component={ReadingQuranPage} />
          </>
        )}
      />
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
