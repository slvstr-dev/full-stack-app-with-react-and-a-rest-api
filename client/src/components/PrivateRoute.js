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
        {({ authenticatedUser }) => (
            <Route {...routeProps}>
                {authenticatedUser ? <Component /> : <Redirect to="/signin" />}
            </Route>
        )}
    </Consumer>
);
