import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createCourse } from "../helpers/fetch-api";
import PropTypes from "prop-types";

import { ErrorList } from "./library/ErrorList";
import { SubmitButton } from "./library/SubmitButton";
import { CancelButton } from "./library/CancelButton";

/**
 * Render create course view partial
 * @param {{authenticatedUser: object}}}
 * @returns {JSX.Element}
 */
export const CreateCourse = ({ authenticatedUser }) => {
    let history = useHistory();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [estimatedTime, setEstimatedTime] = useState("");
    const [materialsNeeded, setMaterialsNeeded] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);

    /**
     * Handle submit of new course
     * @param {function} event
     */
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const errors = await createCourse(
                {
                    title,
                    description,
                    estimatedTime,
                    materialsNeeded,
                    userId: authenticatedUser.id,
                },
                authenticatedUser
            );

            if (errors.length) {
                return setValidationErrors(errors);
            }

            history.push("/");
        } catch (error) {
            history.push("/error");
        }
    };

    return (
        <main>
            <div className="wrap">
                <h2>Create Course</h2>

                {validationErrors.length > 0 && (
                    <ErrorList validationErrors={validationErrors} />
                )}

                <form onSubmit={handleSubmit}>
                    <div className="main--flex">
                        <div>
                            <label htmlFor="courseTitle">Course Title</label>

                            <input
                                id="courseTitle"
                                name="courseTitle"
                                type="text"
                                value={title}
                                onChange={(event) =>
                                    setTitle(event.target.value)
                                }
                            />

                            <p>
                                By {authenticatedUser.firstName}{" "}
                                {authenticatedUser.lastName}
                            </p>

                            <label htmlFor="courseDescription">
                                Course Description
                            </label>

                            <textarea
                                id="courseDescription"
                                name="courseDescription"
                                value={description}
                                onChange={(event) =>
                                    setDescription(event.target.value)
                                }
                            ></textarea>
                        </div>

                        <div>
                            <label htmlFor="estimatedTime">
                                Estimated Time
                            </label>

                            <input
                                id="estimatedTime"
                                name="estimatedTime"
                                type="text"
                                value={estimatedTime}
                                onChange={(event) =>
                                    setEstimatedTime(event.target.value)
                                }
                            />

                            <label htmlFor="materialsNeeded">
                                Materials Needed
                            </label>

                            <textarea
                                id="materialsNeeded"
                                name="materialsNeeded"
                                value={materialsNeeded}
                                onChange={(event) =>
                                    setMaterialsNeeded(event.target.value)
                                }
                            ></textarea>
                        </div>
                    </div>

                    <SubmitButton content="Create course" />

                    <CancelButton url={"/"} content="Cancel" />
                </form>
            </div>
        </main>
    );
};

CreateCourse.propTypes = {
    authenticatedUser: PropTypes.object.isRequired,
};
