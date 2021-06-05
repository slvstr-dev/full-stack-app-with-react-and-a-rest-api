import { useState } from "react";
import { Link } from "react-router-dom";
import { getUser } from "../functions/fetch-api";

/**
 *
 * @returns {JSX.Element}
 */
export const UserSignIn = () => {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    /**
     *
     * @param {*} event
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        getUser({ emailAddress, password });
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
