import React, { useState } from "react";
import Cookies from "js-cookie";
import { getUser } from "../../helpers/fetch-api";

export const Context = React.createContext();

/**
 *
 * @param {*} param0
 * @returns
 */
export const Provider = ({ children }) => {
    const [authenticatedUser, setAuthenticatedUser] = useState(
        Cookies.getJSON("authenticatedUser") || null
    );

    /**
     *
     * @param {*} credentials
     * @returns
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

    /**
     *
     */
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
 *
 */
export const Consumer = Context.Consumer;
