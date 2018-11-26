import React, { Component, Fragment } from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import styles from "./Layout.module.css";

class Layout extends Component {
    state = {
        classes: [styles.layout_container]
    };

    componentDidMount() {
        const classes = [styles.layout_container, styles.layout_container_loaded];
        this.setState({
            classes
        });
    }

    render() {
        const { classes } = this.state;
        const { children } = this.props;
        return (
            <Fragment>
                <div className={classes.join(" ")}>
                    <Navbar />
                    <section className={styles.layout_main_container}>
                        <div className={styles.layout_main_wrapper}>
                            {children}
                        </div>
                    </section>
                    <Footer />
                </div>
            </Fragment>
        );
    }
}

export default Layout;
