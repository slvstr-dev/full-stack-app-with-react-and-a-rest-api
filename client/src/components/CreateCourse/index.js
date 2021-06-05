import { useState } from "react";
import { Link } from "react-router-dom";
import { createCourse } from "../../functions/fetch-api";
// import PropTypes from "prop-types";

// import styles from "./index.module.css";

/**
 *
 * @returns {JSX.Element}
 */
export const CreateCourse = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [estimatedTime, setEstimatedTime] = useState("");
    const [materialsNeeded, setMaterialsNeeded] = useState("");
    const [userId, setUserId] = useState("3");

    /**
     *
     * @param {*} event
     */
    const handleSubmit = (event) => {
        event.preventDefault();

        createCourse({
            title,
            description,
            estimatedTime,
            materialsNeeded,
            userId,
        });
    };

    return (
        <main>
            <div className="wrap">
                <h2>Create Course</h2>

                <div className="validation--errors">
                    <h3>Validation Errors</h3>

                    <ul>
                        <li>Please provide a value for "Title"</li>

                        <li>Please provide a value for "Description"</li>
                    </ul>
                </div>

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

                            <p>By Joe Smith</p>

                            <label htmlFor="courseDescription">
                                Course Description
                            </label>

                            <textarea
                                id="courseDescription"
                                name="courseDescription"
                                defaultValue={description}
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
                                defaultValue={materialsNeeded}
                                onChange={(event) =>
                                    setMaterialsNeeded(event.target.value)
                                }
                            ></textarea>
                        </div>
                    </div>

                    <button className="button" type="submit">
                        Create Course
                    </button>

                    <Link className="button button-secondary" to="/">
                        Cancel
                    </Link>
                </form>
            </div>
        </main>
    );
};

// CreateCourse.defaultProps = {};

// CreateCourse.propTypes = {};
