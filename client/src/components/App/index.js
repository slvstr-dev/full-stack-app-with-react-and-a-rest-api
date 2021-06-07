import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

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

import { PrivateRoute } from "../../components/PrivateRoute";

/**
 * Courses App
 * @returns {JSX.Element}
 */
export const App = () => (
    <Router>
        <Header />

        <Switch>
            <Route exact path="/" component={Courses} />

            <PrivateRoute path="/courses/create" component={CreateCourse} />

            <PrivateRoute path="/courses/:id/update" component={UpdateCourse} />

            <Route path="/courses/:id" component={CourseDetail} />

            <Route path="/signin" component={UserSignIn} />

            <Route path="/signup" component={UserSignUp} />

            <Route path="/signout" component={UserSignOut} />

            <Route path="/forbidden" component={Forbidden} />

            <Route path="/error" component={UnhandledError} />

            <Route path="/notfound" component={NotFound} />

            <Route>
                <Redirect to="/notfound" />
            </Route>
        </Switch>
    </Router>
);
