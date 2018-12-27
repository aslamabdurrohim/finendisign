import React from "react";
import { withRouter } from "react-router-dom";
import Alert from "react-s-alert";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => (
    <div className={styles.layout_container}>
        <Navbar />
        <section className={styles.layout_main_container}>
            <div className={styles.layout_main_wrapper}>
                <Alert stack timeout={3000} />
                {children}
            </div>
        </section>
        <Footer />
    </div>
);

export default withRouter(Layout);
