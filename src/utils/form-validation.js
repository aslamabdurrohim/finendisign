const isEmail = email => {
    const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRgx.test(email.toLowerCase());
};

export const formValidation = (name, value, validity, validationError, index = 0) => {
    if (name === "imageURL") {
        validity[name] = [...validity[name]];
        validity[name][index] = value.length > 0;

        validationError[name] = [...validationError[name]];
        validationError[name][index] = validity[name][index] ? "" : "This field is required and cannot be empty";
    } else {
        validity[name] = value.length > 0;
        validationError[name] = validity[name] ? "" : "This field is required and cannot be empty";

        if (name === "email") {
            validity[name] = isEmail(value);
            validationError[name] = validity[name] ? "" : `${name} should be a valid email address`;
        }
    }

    return { validationError, validity };
};

export const submitValidation = (validity, fields) => (
    Object.keys(fields).every(field => {
        let imageURLValidity = false;
        if (fields.imageURL) {
            imageURLValidity = fields.imageURL.every(imgURLfield => imgURLfield);
        }
        return validity[field] && imageURLValidity;
    })
);

export const errorClass = error => {
    if (error) {
        return error.length === 0 ? "" : "is_invalid";
    }

    return null;
};
