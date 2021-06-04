import PropTypes from "prop-types";
import styles from "./index.module.css";

/**
 *
 * @returns {JSX.Element}
 */
export const NotFound = () => (
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
                <h2>Not Found</h2>

                <p>Sorry! We couldn't find the page you're looking for.</p>
            </div>
        </main>
    </>
);

NotFound.defaultProps = {};

NotFound.propTypes = {};
