import { useState } from "react";
import { useHistory, Redirect, Link } from "react-router-dom";
import { createUser } from "../functions/fetch-api";

import { Consumer } from "../context";

/**
 *
 * @returns {JSX.Element}
 */
export const UserSignUp = () => {
    let history = useHistory();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <Consumer>
            {(context) => {
                /**
                 *
                 * @param {*} event
                 */
                const handleSubmit = (event) => {
                    event.preventDefault();

                    if (password !== confirmPassword) {
                        return console.error(
                            "Password and confirm password are not the same."
                        );
                    }

                    createUser({ firstName, lastName, emailAddress, password });

                    context.actions.signIn({ emailAddress, password });

                    history.push("/");
                };

                return context.authenticatedUser ? (
                    <Redirect to="/forbidden" />
                ) : (
                    <main>
                        <div className="form--centered">
                            <h2>Sign Up</h2>

                            <form onSubmit={handleSubmit}>
                                <label htmlFor="firstName">First Name</label>

                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    value={firstName}
                                    onChange={(event) =>
                                        setFirstName(event.target.value)
                                    }
                                />

                                <label htmlFor="lastName">Last Name</label>

                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    value={lastName}
                                    onChange={(event) =>
                                        setLastName(event.target.value)
                                    }
                                />

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

                                <label htmlFor="confirmPassword">
                                    Confirm Password
                                </label>

                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(event) =>
                                        setConfirmPassword(event.target.value)
                                    }
                                />

                                <button className="button" type="submit">
                                    Sign Up
                                </button>

                                <Link
                                    className="button button-secondary"
                                    to="/"
                                >
                                    Cancel
                                </Link>
                            </form>

                            <p>
                                Already have a user account? Click here to{" "}
                                <Link to="/signin">sign in</Link>!
                            </p>
                        </div>
                    </main>
                );
            }}
        </Consumer>
    );
};
