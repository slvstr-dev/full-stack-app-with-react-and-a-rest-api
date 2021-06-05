import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../functions/fetch-api";

/**
 *
 * @returns {JSX.Element}
 */
export const Courses = () => {
    const [courses, setCourses] = useState([
        {
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
        },
    ]);

    useEffect(() => {
        const fetchCourses = async () => {
            const data = await getCourses();

            setCourses(data);
        };

        fetchCourses();
    }, []);

    return (
        <main>
            <div className="wrap main--grid">
                {courses.map((course) => {
                    return (
                        <Link
                            key={course.id}
                            className="course--module course--link"
                            to={`/courses/${course.id}`}
                        >
                            <h2 className="course--label">Course</h2>

                            <h3 className="course--title">{course.title}</h3>
                        </Link>
                    );
                })}

                <Link
                    className="course--module course--add--module"
                    to="/courses/create"
                >
                    <span className="course--add--title">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 13 13"
                            className="add"
                        >
                            <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
                        </svg>
                        New Course
                    </span>
                </Link>
            </div>
        </main>
    );
};
