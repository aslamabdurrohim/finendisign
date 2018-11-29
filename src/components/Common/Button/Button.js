import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ type, classBtn, children, onClick, disabled }) => {
    let classes = "";
    switch (classBtn) {
        case ("submit"):
            classes = styles.button_submit;
            break;
        case ("success"):
            classes = styles.button_success;
            break;
        default:
            classes = styles.button_default;
            break;
    }
    return (
        <button
            type={type}
            className={classes}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    canSubmit: PropTypes.bool
};

Button.defaultProps = {
    onClick: null,
    canSubmit: true
};

export default Button;
