import { useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// import styles from "./index.module.css";

/**
 *
 * @returns {JSX.Element}
 */
export const UserSignIn = () => {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    };

    return (
        <main>
            <div className="form--centered">
                <h2>Sign In</h2>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="emailAddress">Email Address</label>

                    <input
                        id="emailAddress"
                        name="emailAddress"
                        type="email"
                        value={emailAddress}
                        onChange={(event) =>
                            setEmailAddress(event.target.value)
                        }
                    />

                    <label htmlFor="password">Password</label>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />

                    <button className="button" type="submit">
                        Sign In
                    </button>

                    <Link className="button button-secondary" to="/">
                        Cancel
                    </Link>
                </form>

                <p>
                    Don't have a user account? Click here to{" "}
                    <Link to="/signup">sign up</Link>!
                </p>
            </div>
        </main>
    );
};

// UserSignIn.defaultProps = {};

// UserSignIn.propTypes = {};
