import React from "react";
import Button from "../Common/Button";
import styles from "./Modal.module.css";

const Modal = ({ show, handleClose, children }) => {
    const modalClass = show ? [styles.modal, styles.modal_show] : [styles.modal, styles.modal_close];
    return (
        <div className={modalClass.join(" ")}>
            <section className={styles.modal_main}>
                {children}
                <Button onClick={handleClose} disabled={false} />
            </section>
        </div>
    );
};

export default Modal;
