import { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Context } from "./Context";

/**
 *
 * @returns {JSX.Element}
 */
export const UserSignOut = () => {
    const context = useContext(Context);

    useEffect(() => {
        context.actions.signOut();
    }, [context]);

    return <Redirect to="/" />;
};
