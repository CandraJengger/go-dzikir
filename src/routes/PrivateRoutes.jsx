import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ auth: { isLoggedIn }, children, render, ...rest }) {
  return (
    <Route
      {...rest}
      render={
        render ||
        (({ location }) =>
          isLoggedIn ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          ))
      }
    />
  );
}

PrivateRoute.propTypes = {
  auth: PropTypes.any,
  children: PropTypes.node,
  render: PropTypes.any,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
