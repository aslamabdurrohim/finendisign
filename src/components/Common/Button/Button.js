import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Home = ({ type, classBtn, children }) => {
    let classes = "";
    switch (classBtn) {
        case ("submit"):
            classes = styles.button_sumit;
            break;
        default:
            classes = styles.button_home;
            break;
    }
    return (
        <button type={type} className={classes}>
            {children}
        </button>
    );
};

Home.propTypes = {
    type: PropTypes.string.isRequired
};

export default Home;
