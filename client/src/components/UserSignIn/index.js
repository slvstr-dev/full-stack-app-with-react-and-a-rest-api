import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./index.module.css";

/**
 *
 * @returns {JSX.Element}
 */
export const UserSignIn = () => (
    <main>
        <div className="form--centered">
            <h2>Sign In</h2>

            <form>
                <label htmlFor="emailAddress">Email Address</label>

                <input
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    value=""
                />

                <label htmlFor="password">Password</label>

                <input id="password" name="password" type="password" value="" />

                <button className="button" type="submit">
                    Sign In
                </button>

                <button
                    className="button button-secondary"
                    onclick="event.preventDefault(); location.href='/';"
                >
                    Cancel
                </button>
            </form>

            <p>
                Don't have a user account? Click here to{" "}
                <Link to="/signup">sign up</Link>!
            </p>
        </div>
    </main>
);

UserSignIn.defaultProps = {};

UserSignIn.propTypes = {};
