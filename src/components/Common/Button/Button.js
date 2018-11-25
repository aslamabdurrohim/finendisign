import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Home = ({ type, classBtn, children }) => (
    <button type={type} className={classBtn === "home" ? styles.button_home : ""}>
        {children}
    </button>
);

Home.propTypes = {
    type: PropTypes.string.isRequired
};

export default Home;
