import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Consumer } from "./Context";

/**
 *
 * @param {*} param0
 * @returns
 */
export const PrivateRoute = ({ component: Component, ...routeProps }) => (
    <Consumer>
        {(context) => (
            <Route {...routeProps}>
                {context.authenticatedUser ? (
                    <Component {...context} />
                ) : (
                    <Redirect to="/signin" />
                )}
            </Route>
        )}
    </Consumer>
);
