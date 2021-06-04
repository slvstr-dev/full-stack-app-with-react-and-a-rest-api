import PropTypes from "prop-types";

import styles from "./index.module.css";

/**
 *
 * @returns {JSX.Element}
 */
export const CreateCourse = () => {
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

                <form>
                    <div className="main--flex">
                        <div>
                            <label htmlFor="courseTitle">Course Title</label>

                            <input
                                id="courseTitle"
                                name="courseTitle"
                                type="text"
                                value=""
                            />

                            <p>By Joe Smith</p>

                            <label htmlFor="courseDescription">
                                Course Description
                            </label>

                            <textarea
                                id="courseDescription"
                                name="courseDescription"
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
                                value=""
                            />

                            <label htmlFor="materialsNeeded">
                                Materials Needed
                            </label>

                            <textarea
                                id="materialsNeeded"
                                name="materialsNeeded"
                            ></textarea>
                        </div>
                    </div>

                    <button className="button" type="submit">
                        Create Course
                    </button>

                    <button
                        className="button button-secondary"
                        onclick="event.preventDefault(); location.href='index.html';"
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </main>
    );
};

CreateCourse.defaultProps = {};

CreateCourse.propTypes = {};