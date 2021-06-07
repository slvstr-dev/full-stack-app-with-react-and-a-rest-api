import { useContext, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { Context } from "./Context";

/**
 * Render user sign out view partial
 * @returns {JSX.Element}
 */
export const UserSignOut = () => {
    const context = useContext(Context);
    let history = useHistory();

    useEffect(() => {
        /** Sign out authenticatedUser */
        const signOut = async () => {
            try {
                await context.actions.signOut();
            } catch (error) {
                history.push("/error");
            }
        };

        signOut();
    }, [context, history]);

    return <Redirect to="/" />;
};
