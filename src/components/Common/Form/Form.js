import React from "react";
import PropTypes from "prop-types";

const Form = ({ className, onSubmit, children }) => (
    <div className={className}>
        <form onSubmit={onSubmit}>
            {children}
        </form>
    </div>
);

Form.propTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
};

Form.defaultProps = {
    className: ""
};

export default Form;
