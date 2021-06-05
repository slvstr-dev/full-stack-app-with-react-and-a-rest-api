import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { deleteCourse } from "../../functions/fetch-api";
// import PropTypes from "prop-types";

// import styles from "./index.module.css";

/**
 *
 * @returns {JSX.Element}
 */
export const CourseDetail = () => {
    const { id } = useParams();

    const [course, setCourse] = useState({
        id: "",
        title: "",
        description: "",
        extimatedTime: "",
        materialsNeeded: "",
        userId: 0,
        user: {
            id: 0,
            firstName: "",
            lastName: "",
            emailAddress: "",
        },
    });

    useEffect(() => {
        const fetchCourse = async () => {
            const result = await fetch(
                `http://localhost:5000/api/courses/${id}`
            );
            const data = await result.json();

            setCourse(data.course);
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
                        onClick={() => deleteCourse(course)}
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

                            <h4 className="course--name">{course.title}</h4>

                            <p>
                                By {course.user.firstName}{" "}
                                {course.user.lastName}
                            </p>

                            <ReactMarkdown>{course.description}</ReactMarkdown>
                        </div>

                        <div>
                            <h3 className="course--detail--title">
                                Estimated Time
                            </h3>

                            <p>{course.estimatedTime}</p>

                            <h3 className="course--detail--title">
                                Materials Needed
                            </h3>

                            <ul className="course--detail--list">
                                <ReactMarkdown>
                                    {course.materialsNeeded}
                                </ReactMarkdown>
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
