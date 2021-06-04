import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Header } from "../../components/Header";
import { Courses } from "../../components/Courses";
import { CreateCourse } from "../../components/CreateCourse";
import { UpdateCourse } from "../../components/UpdateCourse";
import { CourseDetail } from "../../components/CourseDetail";
import { UserSignIn } from "../../components/UserSignIn";
import { UserSignUp } from "../../components/UserSignUp";
import { UserSignOut } from "../../components/UserSignOut";
import { NotFound } from "../../components/NotFound";
import { Forbidden } from "../../components/Forbidden";
import { UnhandledError } from "../../components/UnhandledError";

import styles from "./index.module.css";

/**
 *
 * @returns {JSX.Element}
 */
export const App = () => (
    <Router>
        <Header />

        <Switch>
            <Route exact path="/">
                <Courses />
            </Route>

            <Route path="/courses/create">
                <CreateCourse />
            </Route>

            <Route path="/courses/:id/update">
                <UpdateCourse />
            </Route>

            <Route path="/courses/:id">
                <CourseDetail />
            </Route>

            <Route path="/signin">
                <UserSignIn />
            </Route>

            <Route path="/signup">
                <UserSignUp />
            </Route>

            <Route path="/signout">
                <UserSignOut />
            </Route>

            <Route path="/notfound">
                <NotFound />
            </Route>

            <Route path="/forbidden">
                <Forbidden />
            </Route>

            <Route path="/error">
                <UnhandledError />
            </Route>
        </Switch>
    </Router>
);

App.defaultProps = {};

App.propTypes = {};
