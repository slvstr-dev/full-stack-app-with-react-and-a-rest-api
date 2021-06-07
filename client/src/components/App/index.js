import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import { Header } from "../../components/Header.js";
import { Courses } from "../../components/Courses.js";
import { CreateCourse } from "../../components/CreateCourse.js";
import { UpdateCourse } from "../../components/UpdateCourse.js";
import { CourseDetail } from "../../components/CourseDetail.js";
import { UserSignIn } from "../../components/UserSignIn.js";
import { UserSignUp } from "../../components/UserSignUp.js";
import { UserSignOut } from "../../components/UserSignOut.js";
import { NotFound } from "../../components/NotFound.js";
import { Forbidden } from "../../components/Forbidden.js";
import { UnhandledError } from "../../components/UnhandledError.js";

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
