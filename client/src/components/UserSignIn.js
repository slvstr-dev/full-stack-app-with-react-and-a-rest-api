import { useState } from "react";
import { useHistory, Redirect, Link } from "react-router-dom";
import { Consumer } from "./Context";

import { ErrorList } from "./library/ErrorList";

/**
 *
 * @returns {JSX.Element}
 */
export const UserSignIn = () => {
    let history = useHistory();

    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);

    return (
        <Consumer>
            {({ authenticatedUser, actions }) => {
                /**
                 *
                 * @param {*} event
                 */
                const handleSubmit = async (event) => {
                    event.preventDefault();

                    try {
                        const errors = await actions.signIn({
                            emailAddress,
                            password,
                        });

                        if (errors.length) {
                            return setValidationErrors(errors);
                        }

                        history.push("/");
                    } catch (error) {
                        history.push("/error");
                    }
                };

                return authenticatedUser ? (
                    <Redirect to="/forbidden" />
                ) : (
                    <main>
                        <div className="form--centered">
                            <h2>Sign In</h2>

                            {validationErrors.length > 0 && (
                                <ErrorList
                                    validationErrors={validationErrors}
                                />
                            )}

                            <form onSubmit={handleSubmit}>
                                <label htmlFor="emailAddress">
                                    Email Address
                                </label>

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
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                />

                                <button className="button" type="submit">
                                    Sign In
                                </button>

                                <Link
                                    className="button button-secondary"
                                    to="/"
                                >
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
            }}
        </Consumer>
    );
};
