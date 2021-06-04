import PropTypes from "prop-types";

import { Header } from "../../components/Header";
import { Courses } from "../../components/Courses";

import styles from "./index.module.css";

/**
 *
 * @returns {JSX.Element}
 */
export const App = () => (
    <>
        <Header />
        <Courses />
    </>
);

App.defaultProps = {};

App.propTypes = {};
