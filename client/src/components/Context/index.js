import React, { useState } from "react";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { getUser } from "../../helpers/fetch-api";

export const Context = React.createContext();

/**
 * Create context with authenticatedUser data
 * @param {{children: JSX.Element}}
 * @returns {JSX.Element}
 */
export const Provider = ({ children }) => {
    const [authenticatedUser, setAuthenticatedUser] = useState(
        Cookies.getJSON("authenticatedUser") || null
    );

    /**
     * Add authenticatedUser to state & cookie
     * @param {string} credentials
     * @return {object}
     */
    const signIn = async (credentials) => {
        const user = await getUser(credentials);
        user.password = credentials.password;

        if (user !== null) {
            setAuthenticatedUser(user);

            Cookies.set("authenticatedUser", JSON.stringify(user), {
                expires: 1,
            });
        }

        return user;
    };

    /** Remove authenticatedUser from state & cookie */
    const signOut = () => {
        setAuthenticatedUser(null);
        Cookies.remove("authenticatedUser");
    };

    return (
        <Context.Provider
            value={{ authenticatedUser, actions: { signIn, signOut } }}
        >
            {children}
        </Context.Provider>
    );
};

/**
 * Consume context with authenticatedUser data
 */
export const Consumer = Context.Consumer;

Provider.propTypes = {
    children: PropTypes.node,
};
