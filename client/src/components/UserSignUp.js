import { useState } from "react";
import { useHistory, Redirect, Link } from "react-router-dom";
import { createUser } from "../helpers/fetch-api";
import { Consumer } from "./Context";

import { ErrorList } from "./library/ErrorList";
import { SubmitButton } from "./library/SubmitButton";
import { CancelButton } from "./library/CancelButton";

/**
 * Render user sign up view partial
 * @returns {JSX.Element}
 */
export const UserSignUp = () => {
    let history = useHistory();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);

    return (
        <Consumer>
            {({ authenticatedUser, actions }) => {
                /** Handle submit of user sign up */
                const handleSubmit = async (event) => {
                    event.preventDefault();

                    if (password === confirmPassword) {
                        try {
                            const errors = await createUser({
                                firstName,
                                lastName,
                                emailAddress,
                                password,
                            });

                            if (errors.length) {
                                return setValidationErrors(errors);
                            }

                            actions.signIn({ emailAddress, password });

                            return history.push("/");
                        } catch (error) {
                            history.push("/error");
                        }
                    }

                    setValidationErrors([
                        "Password and confirm password are not the same.",
                    ]);
                };

                return authenticatedUser ? (
                    <Redirect to="/forbidden" />
                ) : (
                    <main>
                        <div className="form--centered">
                            <h2>Sign Up</h2>

                            {validationErrors.length > 0 && (
                                <ErrorList
                                    validationErrors={validationErrors}
                                />
                            )}

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

                                <SubmitButton content="Sign up" />

                                <CancelButton url={"/"} content="Cancel" />
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
