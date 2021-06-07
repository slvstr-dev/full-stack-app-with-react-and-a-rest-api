import { Link } from "react-router-dom";
import { Consumer } from "./Context";

/**
 *
 * @returns {JSX.Element}
 */
export const Header = () => (
    <Consumer>
        {({ authenticatedUser, actions }) => (
            <header>
                <div className="wrap header--flex">
                    <h1 className="header--logo">
                        <Link to="/">Courses</Link>
                    </h1>

                    <nav>
                        {!authenticatedUser ? (
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
                                <li>Welcome {authenticatedUser.firstName}!</li>

                                <li>
                                    <Link
                                        to="/signout"
                                        onClick={actions.signOut}
                                    >
                                        Sign Out
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </nav>
                </div>
            </header>
        )}
    </Consumer>
);
