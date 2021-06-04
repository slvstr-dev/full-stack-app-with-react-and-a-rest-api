import PropTypes from "prop-types";
import styles from "./index.module.css";

/**
 *
 * @returns {JSX.Element}
 */
export const Header = () => (
    <header>
        <div className="wrap header--flex">
            <h1 className="header--logo">
                <a href="index.html">Courses</a>
            </h1>

            <nav>
                <ul className="header--signedout">
                    <li>
                        <a href="sign-up.html">Sign Up</a>
                    </li>

                    <li>
                        <a href="sign-in.html">Sign In</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);

Header.defaultProps = {};

Header.propTypes = {};
