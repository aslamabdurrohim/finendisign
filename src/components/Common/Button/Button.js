import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Home = ({ type, classBtn, children, onClick }) => {
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
        >
            {children}
        </button>
    );
};

Home.propTypes = {
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

Home.defaultProps = {
    onClick: null
};

export default Home;
