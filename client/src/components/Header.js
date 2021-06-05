import { Link } from "react-router-dom";

/**
 *
 * @returns {JSX.Element}
 */
export const Header = () => {
    const signedIn = false;

    return (
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo">
                    <Link to="/">Courses</Link>
                </h1>

                <nav>
                    {signedIn ? (
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
                            <li>Welcome user!</li>

                            <li>
                                <Link to="/signout">Sign Out</Link>
                            </li>
                        </ul>
                    )}
                </nav>
            </div>
        </header>
    );
};
