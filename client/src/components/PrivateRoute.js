import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "./Context";

/**
 * Higher-order component for configuring protected routes
 * @param {{component: *}}
 * @returns
 */
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Consumer>
        {(context) => (
            <Route {...rest}>
                {context.authenticatedUser ? (
                    <Component {...context} />
                ) : (
                    <Redirect to="/signin" />
                )}
            </Route>
        )}
    </Consumer>
);

PrivateRoute.propTypes = {
    component: PropTypes.any.isRequired,
};
