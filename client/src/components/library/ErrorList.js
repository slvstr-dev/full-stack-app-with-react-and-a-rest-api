import PropTypes from "prop-types";

/**
 * Render error list element
 * @param {{validationErrors: string[]}}
 * @returns {JSX.Element}
 */
export const ErrorList = ({ validationErrors }) => (
    <div className="validation--errors">
        <h3>Validation Errors</h3>

        <ul>
            {validationErrors.map((validationError, index) => {
                return <li key={index}>{validationError}</li>;
            })}
        </ul>
    </div>
);

ErrorList.propTypes = {
    validationErrors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
