import React from "react";
import PropTypes from "prop-types";
import styles from "./Backdrop.module.css";

const Backdrop = ({ show }) => {
    const backdropClass = show ? [styles.backdrop, styles.backdrop_show] : [styles.backdrop, styles.backdrop_close];
    if (!show) {
        return null;
    }

    return (
        <div className={backdropClass.join(" ")} />
    );
};

Backdrop.propTypes = {
    show: PropTypes.bool.isRequired
};

export default Backdrop;
