import PropTypes from "prop-types";

/**
 * Render cancel button element
 * @param {{content: string}}
 * @returns {JSX.Element}
 */
export const SubmitButton = ({ content }) => (
    <button className="button" type="submit">
        {content}
    </button>
);

SubmitButton.defaultProps = {
    content: "Submit",
};

SubmitButton.propTypes = {
    content: PropTypes.string,
};
