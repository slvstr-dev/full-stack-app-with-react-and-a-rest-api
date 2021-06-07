import { Link } from "react-router-dom";

export const CancelButton = ({ url, children }) => (
    <Link className="button button-secondary" to={url}>
        {children}
    </Link>
);
