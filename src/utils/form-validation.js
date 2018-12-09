const isEmail = email => {
    const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRgx.test(email.toLowerCase());
};

export const formValidation = (name, value, validity, validationError, index = 0) => {
    validity[name] = value.length > 0;
    validationError[name] = validity[name] ? "" : "This field is required and cannot be empty";

    if (name === "email") {
        validity[name] = isEmail(value);
        validationError[name] = validity[name] ? "" : `${name} should be a valid email address`;
    }

    return { validationError, validity };
};

export const submitValidation = (validity, fields) => Object.keys(fields).every(field => validity[field]);

export const errorClass = error => (
    error.length === 0 ? "" : "is_invalid"
);
