import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/scale.css";
import PropTypes from "prop-types";

const CustomAlert = (type, message) => (
    Alert[type](
        message,
        {
            position: "top-right",
            effect: "scale"
        }
    )
);

CustomAlert.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
};

export default CustomAlert;
