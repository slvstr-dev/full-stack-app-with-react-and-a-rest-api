import PropTypes from "prop-types";

import styles from "./index.module.css";

/**
 *
 * @returns {JSX.Element}
 */
export const NotFound = () => (
    <main>
        <div className="wrap">
            <h2>Not Found</h2>

            <p>Sorry! We couldn't find the page you're looking for.</p>
        </div>
    </main>
);

NotFound.defaultProps = {};

NotFound.propTypes = {};
