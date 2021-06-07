import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getCourse, deleteCourse } from "../helpers/fetch-api";
import { Consumer } from "./Context";

import { CancelButton } from "./library/CancelButton";

/**
 *
 * @returns {JSX.Element}
 */
export const CourseDetail = () => {
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

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const data = await getCourse(id);

                setTitle(data.title);
                setDescription(data.description);
                setEstimatedTime(data.estimatedTime);
                setMaterialsNeeded(data.materialsNeeded);
                setUserId(data.userId);
                setUser(data.user);
            } catch (error) {
                history.push("/notfound");
            }
        };

        fetchCourse();
    }, [id, history]);

    return (
        <Consumer>
            {({ authenticatedUser }) => {
                const isAuthor =
                    authenticatedUser && authenticatedUser.id === userId;

                /**
                 *
                 * @param {*} event
                 */
                const handleDelete = async () => {
                    try {
                        await deleteCourse(id, authenticatedUser);

                        history.push("/");
                    } catch (error) {
                        history.push("/error");
                    }
                };

                return (
                    <main>
                        <div className="actions--bar">
                            <div className="wrap">
                                {isAuthor && (
                                    <>
                                        <Link
                                            className="button"
                                            to={`/courses/${id}/update`}
                                        >
                                            Update Course
                                        </Link>

                                        <div
                                            className="button"
                                            onClick={handleDelete}
                                        >
                                            Delete Course
                                        </div>
                                    </>
                                )}

                                <CancelButton url={"/"}>
                                    Return to List
                                </CancelButton>
                            </div>
                        </div>

                        <div className="wrap">
                            <h2>Course Detail</h2>

                            <form>
                                <div className="main--flex">
                                    <div>
                                        <h3 className="course--detail--title">
                                            Course
                                        </h3>

                                        <h4 className="course--name">
                                            {title}
                                        </h4>

                                        <p>
                                            By {user.firstName} {user.lastName}
                                        </p>

                                        <ReactMarkdown>
                                            {description}
                                        </ReactMarkdown>
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
                                            <ReactMarkdown>
                                                {materialsNeeded}
                                            </ReactMarkdown>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </main>
                );
            }}
        </Consumer>
    );
};
