import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import { Header } from "../Header.js";
import { Courses } from "../Courses.js";
import { CreateCourse } from "../CreateCourse.js";
import { UpdateCourse } from "../UpdateCourse.js";
import { CourseDetail } from "../CourseDetail.js";
import { UserSignIn } from "../UserSignIn.js";
import { UserSignUp } from "../UserSignUp.js";
import { UserSignOut } from "../UserSignOut.js";
import { NotFound } from "../NotFound.js";
import { Forbidden } from "../Forbidden.js";
import { UnhandledError } from "../UnhandledError.js";

/**
 *
 * @returns {JSX.Element}
 */
export const App = () => (
    <Router>
        <Header />

        <Switch>
            <Route exact path="/" component={Courses} />

            <Route path="/courses/create" component={CreateCourse} />

            <Route path="/courses/:id/update" component={UpdateCourse} />

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
