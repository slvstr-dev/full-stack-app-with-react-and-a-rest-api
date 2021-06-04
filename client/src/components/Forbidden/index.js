import PropTypes from "prop-types";
import styles from "./index.module.css";

/**
 *
 * @returns {JSX.Element}
 */
export const Forbidden = () => (
    <>
        <header>
            <div className="wrap header--flex">
                <h1 className="header--logo">
                    <a href="index.html">Courses</a>
                </h1>

                <nav>
                    <ul className="header--signedin">
                        <li>Welcome, Joe Smith!</li>

                        <li>
                            <a href="sign-out.html">Sign Out</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>

        <main>
            <div className="wrap">
                <h2>Forbidden</h2>

                <p>Oh oh! You can't access this page.</p>
            </div>
        </main>
    </>
);

Forbidden.defaultProps = {};

Forbidden.propTypes = {};
