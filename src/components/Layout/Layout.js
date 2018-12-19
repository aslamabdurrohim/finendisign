import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Alert from "react-s-alert";
import Navbar from "../Navbar";
import Footer from "../Footer";
import styles from "./Layout.module.css";

class Layout extends Component {
    static propTypes = {
        title: PropTypes.string,
        nomargin: PropTypes.bool
    };

    static defaultProps = {
        title: "",
        nomargin: false
    }

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
        const { children, title, nomargin } = this.props;

        let wrapperClass = null;
        if (nomargin) {
            wrapperClass = [styles.layout_main_wrapper, styles.layout_main_wrapper_nomargin];
        } else {
            wrapperClass = [styles.layout_main_wrapper];
        }

        return (
            <Fragment>
                <div className={classes.join(" ")}>
                    <Navbar />
                    <section className={styles.layout_main_container}>
                        <div className={wrapperClass.join(" ")}>
                            <Alert stack timeout={3000} />
                            <h2 className={styles.layout_title}>{title}</h2>
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
