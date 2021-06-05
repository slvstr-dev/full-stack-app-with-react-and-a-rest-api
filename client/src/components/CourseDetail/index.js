import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getCourse, deleteCourse } from "../../functions/fetch-api";
// import PropTypes from "prop-types";

// import styles from "./index.module.css";

/**
 *
 * @returns {JSX.Element}
 */
export const CourseDetail = () => {
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
            setEstimatedTime(data.setEstimatedTime);
            setMaterialsNeeded(data.materialsNeeded);
            setUserId(data.userId);
            setUser(data.user);
        };

        fetchCourse();
    }, [id]);

    return (
        <main>
            <div className="actions--bar">
                <div className="wrap">
                    <Link className="button" to={`/courses/${id}/update`}>
                        Update Course
                    </Link>

                    <Link
                        className="button"
                        to={"/"}
                        onClick={() => deleteCourse(id)}
                    >
                        Delete Course
                    </Link>

                    <Link className="button button-secondary" to="/">
                        Return to List
                    </Link>
                </div>
            </div>

            <div className="wrap">
                <h2>Course Detail</h2>

                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>

                            <h4 className="course--name">{title}</h4>

                            <p>
                                By {user.firstName} {user.lastName}
                            </p>

                            <ReactMarkdown>{description}</ReactMarkdown>
                        </div>

                        <div>
                            <h3 className="course--detail--title">
                                Estimated Time
                            </h3>

                            <p>{estimatedTime}</p>

                            <h3 className="course--detail--title">
                                Materials Needed
                            </h3>

                            <ul className="course--detail--list">
                                <ReactMarkdown>{materialsNeeded}</ReactMarkdown>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};

// CourseDetail.defaultProps = {};

// CourseDetail.propTypes = {};
