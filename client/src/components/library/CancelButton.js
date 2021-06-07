import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * Render cancel button element
 * @param {{url: string, content: string}}
 * @returns {JSX.Element}
 */
export const CancelButton = ({ url, content }) => (
    <Link className="button button-secondary" to={url}>
        {content}
    </Link>
);

CancelButton.defaultProps = {
    url: "/",
    content: "Cancel",
};

CancelButton.propTypes = {
    url: PropTypes.string,
    children: PropTypes.string,
};
