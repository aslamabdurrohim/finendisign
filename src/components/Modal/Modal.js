import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Backdrop from "../Backdrop";
import styles from "./Modal.module.css";

const Modal = ({ show, onClose, children, title }) => {
    const modalClass = show ? [styles.modal, styles.modal_show] : [styles.modal, styles.modal_close];
    return (
        <Fragment>
            <Backdrop show={show} />
            <div className={modalClass.join(" ")}>
                <div className={styles.modal_header}>
                    <h1>{title}</h1>
                    <div className={styles.modal_close_icon} onClick={onClose} role="presentation">
                        <FontAwesomeIcon icon="times" size="2x" />
                    </div>
                </div>
                <section className={styles.modal_main}>
                    {children}
                </section>
            </div>
        </Fragment>
    );
};

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired
};

export default Modal;
