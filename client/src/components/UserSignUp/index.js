import { useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// import styles from "./index.module.css";

/**
 *
 * @returns {JSX.Element}
 */
export const UserSignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const postData = async () => {
        const response = await fetch(`http://localhost:5000/api/users`, {
            method: "POST",
            body: JSON.stringify({
                firstName,
                lastName,
                emailAddress,
                password,
            }),
        });

        console.log(response.json());
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        postData();
    };

    return (
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
                        onChange={(event) => setFirstName(event.target.value)}
                    />

                    <label htmlFor="lastName">Last Name</label>

                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />

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

                    <label htmlFor="confirmPassword">Confirm Password</label>

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

                    <Link className="button button-secondary" to="/">
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
};

// UserSignUp.defaultProps = {};

// UserSignUp.propTypes = {};
