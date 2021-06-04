import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// import styles from "./index.module.css";

/**
 *
 * @returns {JSX.Element}
 */
export const Header = () => (
    <header>
        <div className="wrap header--flex">
            <h1 className="header--logo">
                <Link to="/">Courses</Link>
            </h1>

            <nav>
                <ul className="header--signedout">
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>

                    <li>
                        <Link to="/signin">Sign In</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);

// Header.defaultProps = {};

// Header.propTypes = {};
