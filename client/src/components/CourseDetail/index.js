import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./index.module.css";

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
    }, []);

    return (
        <main>
            <div className="actions--bar">
                <div className="wrap">
                    <Link className="button" to={`/api/courses/${id}`}>
                        Update Course
                    </Link>

                    <Link className="button" to={`/api/courses/${id}`}>
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

                            <p>{course.description}</p>
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
                                <li>1/2 x 3/4 inch parting strip</li>

                                <li>1 x 2 common pine</li>

                                <li>1 x 4 common pine</li>

                                <li>1 x 10 common pine</li>

                                <li>1/4 inch thick lauan plywood</li>

                                <li>Finishing Nails</li>

                                <li>Sandpaper</li>

                                <li>Wood Glue</li>

                                <li>Wood Filler</li>

                                <li>Minwax Oil Based Polyurethane</li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};

CourseDetail.defaultProps = {};

CourseDetail.propTypes = {};
