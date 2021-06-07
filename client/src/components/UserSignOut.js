import { useContext, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { Context } from "./Context";

/**
 *
 * @returns {JSX.Element}
 */
export const UserSignOut = () => {
    const context = useContext(Context);
    let history = useHistory();

    useEffect(() => {
        const signOut = async () => {
            try {
                await context.actions.signOut();
            } catch (error) {
                history.push("/error");
            }
        };

        signOut();
    }, [context]);

    return <Redirect to="/" />;
};
