import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({
    type,
    name,
    value,
    onChange,
    id,
    className,
    errorMsg,
    placeholder
}) => {
    if (type === "textarea") {
        return (
            <div className={styles.input_container}>
                <textarea
                    value={value}
                    id={id}
                    name={name}
                    onChange={onChange}
                    className={[styles.input, styles[className]].join(" ")}
                    rows={10}
                    style={{ height: "100px", resize: "vertical" }}
                />
                <div className={styles.input_err_msg_wrapper}>
                    {errorMsg && <p className={styles.input_error_msg}>{errorMsg}</p>}
                </div>
            </div>
        );
    }
    return (
        <div className={styles.input_container}>
            <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                className={[styles.input, styles[className]].join(" ")}
                placeholder={placeholder}
            />
            <div className={styles.input_err_msg_wrapper}>
                { (errorMsg && name !== "imageURL") && <p className={styles.input_error_msg}>{errorMsg}</p> }
            </div>
        </div>
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    errorMsg: PropTypes.string
};

Input.defaultProps = {
    className: "",
    errorMsg: "",
    placeholder: ""
};

export default Input;
