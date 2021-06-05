import { Link } from "react-router-dom";
import { Consumer } from "../context";

/**
 *
 * @returns {JSX.Element}
 */
export const Header = () => (
    <Consumer>
        {(context) => {
            const user = context.authenticatedUser;
            const signOut = context.actions.signOut;

            return (
                <header>
                    <div className="wrap header--flex">
                        <h1 className="header--logo">
                            <Link to="/">Courses</Link>
                        </h1>

                        <nav>
                            {!user ? (
                                <ul className="header--signedout">
                                    <li>
                                        <Link to="/signup">Sign Up</Link>
                                    </li>

                                    <li>
                                        <Link to="/signin">Sign In</Link>
                                    </li>
                                </ul>
                            ) : (
                                <ul className="header--signedin">
                                    <li>Welcome {user.firstName}!</li>

                                    <li>
                                        <Link to="/signout" onClick={signOut}>
                                            Sign Out
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </nav>
                    </div>
                </header>
            );
        }}
    </Consumer>
);
