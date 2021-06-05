import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getCourse, updateCourse } from "../../functions/fetch-api";
// import PropTypes from "prop-types";

// import styles from "./index.module.css";

/**
 *
 * @returns {JSX.Element}
 */
export const UpdateCourse = () => {
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [estimatedTime, setEstimatedTime] = useState("");
    const [materialsNeeded, setMaterialsNeeded] = useState("");
    const [userId, setUserId] = useState("3");
    const [user, setUser] = useState({
        id: 0,
        firstName: "",
        lastName: "",
        emailAddress: "",
    });

    useEffect(() => {
        const fetchCourse = async () => {
            const data = await getCourse(id);

            setTitle(data.title);
            setDescription(data.title);
            setEstimatedTime(data.estimatedTime);
            setMaterialsNeeded(data.materialsNeeded);
            setUserId(data.userId);
            setUser(data.user);
        };

        fetchCourse();
    }, [id]);

    /**
     *
     * @param {*} event
     */
    const handleSubmit = (event) => {
        event.preventDefault();

        updateCourse({
            id,
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
                <h2>Update Course</h2>

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
                                defaultValue={
                                    materialsNeeded ? materialsNeeded : ""
                                }
                                onChange={(event) =>
                                    setMaterialsNeeded(event.target.value)
                                }
                            ></textarea>
                        </div>
                    </div>

                    <button className="button" type="submit">
                        Update Course
                    </button>

                    <Link
                        className="button button-secondary"
                        to={`/courses/${id}`}
                    >
                        Cancel
                    </Link>
                </form>
            </div>
        </main>
    );
};

// UpdateCourse.defaultProps = {};

// UpdateCourse.propTypes = {};
