import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({ type, name, value, onChange, id }) => {
    let element = null;
    switch (type) {
        case ("text"):
            element = (
                <input
                    type="text"
                    value={value}
                    id={id}
                    name={name}
                    onChange={onChange}
                    className={styles.input}
                />
            );
            break;
        case ("textarea"):
            element = (
                <textarea
                    value={value}
                    id={id}
                    name={name}
                    onChange={onChange}
                    className={styles.input}
                    rows={10}
                    style={{ height: "100px" }}
                />
            );
            break;
        case ("email"):
            element = (
                <input
                    type="email"
                    value={value}
                    name={name}
                    onChange={onChange}
                    className={styles.input}
                />
            );
            break;
        default:
            element = null;
            break;
    }

    return element;
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
};

export default Input;
