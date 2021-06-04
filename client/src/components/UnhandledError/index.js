import PropTypes from "prop-types";

import styles from "./index.module.css";

/**
 *
 * @returns {JSX.Element}
 */
export const UnhandledError = () => (
    <main>
        <div className="wrap">
            <h2>Error</h2>

            <p>Sorry! We just encountered an unexpected error.</p>
        </div>
    </main>
);

UnhandledError.defaultProps = {};

UnhandledError.propTypes = {};
