import React from "react";
import PropTypes from "prop-types";
import styles from "./Select.module.css";

const Select = ({ options, value, onChange, className, name }) => (
    <select
        value={value}
        onChange={onChange}
        className={[styles.select, className].join(" ")}
        name={name}
    >
        {options.map((option, index) => (
            <option value={option.value} key={index}>{option.name}</option>
        ))}
    </select>
);

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string
};

Select.defaultProps = {
    className: ""
};

export default Select;
