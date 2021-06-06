import React, { useState } from "react";
import Cookies from "js-cookie";
import { getUser } from "../functions/fetch-api";

const Context = React.createContext();

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
        try {
            const user = await getUser(credentials);
            user.password = credentials.password;

            if (user !== null) {
                setAuthenticatedUser(user);

                Cookies.set("authenticatedUser", JSON.stringify(user), {
                    expires: 1,
                });
            }

            return user;
        } catch (error) {
            return console.error("signIn", error);
        }
    };

    /**
     *
     */
    const signOut = () => {
        setAuthenticatedUser(null);
        Cookies.remove("authenticatedUser");
    };

    const value = {
        authenticatedUser,
        actions: { signIn, signOut },
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

/**
 *
 */
export const Consumer = Context.Consumer;
