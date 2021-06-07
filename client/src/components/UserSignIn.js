import { useState } from "react";
import { useHistory, Redirect, Link } from "react-router-dom";
import { Consumer } from "./Context";

import { SubmitButton } from "./library/SubmitButton";
import { CancelButton } from "./library/CancelButton";

/**
 *
 * @returns {JSX.Element}
 */
export const UserSignIn = () => {
    let history = useHistory();

    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

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
                        await actions.signIn({
                            emailAddress,
                            password,
                        });

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

                                <SubmitButton>Sign up</SubmitButton>

                                <CancelButton url={"/"}>Cancel</CancelButton>
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
