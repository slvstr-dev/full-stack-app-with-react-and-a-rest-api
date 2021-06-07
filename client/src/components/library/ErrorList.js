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
