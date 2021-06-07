import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getCourse, updateCourse } from "../helpers/fetch-api";
import PropTypes from "prop-types";

import { ErrorList } from "./library/ErrorList";
import { SubmitButton } from "./library/SubmitButton";
import { CancelButton } from "./library/CancelButton";

/**
 * Render update course view partial
 * @param {{authenticatedUser: object}}}
 * @returns {JSX.Element}
 */
export const UpdateCourse = ({ authenticatedUser }) => {
    const { id } = useParams();
    let history = useHistory();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [estimatedTime, setEstimatedTime] = useState("");
    const [materialsNeeded, setMaterialsNeeded] = useState("");
    const [userId, setUserId] = useState("");
    const [user, setUser] = useState({
        id: 0,
        firstName: "",
        lastName: "",
        emailAddress: "",
    });
    const [validationErrors, setValidationErrors] = useState([]);

    useEffect(() => {
        /** Fetch course data from database */
        const fetchCourse = async () => {
            try {
                const data = await getCourse(id);

                setTitle(data.title);
                setDescription(data.description);
                setEstimatedTime(data.estimatedTime);
                setMaterialsNeeded(data.materialsNeeded);
                setUserId(data.userId);
                setUser(data.user);

                if (data.userId !== authenticatedUser.id) {
                    history.push("/forbidden");
                }
            } catch (error) {
                history.push("/notfound");
            }
        };

        fetchCourse();
    }, [id, history, authenticatedUser]);

    /**
     * Handle submit of updated course
     * @param {function} event
     */
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const errors = await updateCourse(
                {
                    id,
                    title,
                    description,
                    estimatedTime,
                    materialsNeeded,
                    userId,
                },
                authenticatedUser
            );

            if (errors.length) {
                return setValidationErrors(errors);
            }

            history.push(`/courses/${id}`);
        } catch (error) {
            history.push("/error");
        }
    };

    return (
        <main>
            <div className="wrap">
                <h2>Update Course</h2>

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
                                By {user.firstName} {user.lastName}
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
                                value={estimatedTime ? estimatedTime : ""}
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
                                value={materialsNeeded ? materialsNeeded : ""}
                                onChange={(event) =>
                                    setMaterialsNeeded(event.target.value)
                                }
                            ></textarea>
                        </div>
                    </div>

                    <SubmitButton content="Update course" />

                    <CancelButton url={`/courses/${id}`} content="Cancel" />
                </form>
            </div>
        </main>
    );
};

UpdateCourse.propTypes = {
    authenticatedUser: PropTypes.object.isRequired,
};
