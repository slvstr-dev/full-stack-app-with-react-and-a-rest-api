import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Consumer } from "./Context";

export const PrivateRoute = ({ component: Component, ...rest }) => {
    <Consumer>
        {(context) => (
            <Route
                {...rest}
                render={(props) =>
                    context.authenticatedUser ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/signin",
                                state: { from: props.location },
                            }}
                        />
                    )
                }
            />
        )}
    </Consumer>;
};
