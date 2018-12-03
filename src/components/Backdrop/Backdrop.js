import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = open => {
    const backdropClass = open ? [styles.backdrop, styles.backdrop_show] : [styles.backdrop, styles.backdrop_close];
    return (
        <div className={backdropClass.join(" ")} />
    );
};

export default Backdrop;
