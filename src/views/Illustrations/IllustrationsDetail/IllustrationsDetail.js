/* eslint react/no-did-update-set-state: 0 */

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GalleryDetail from "../../../components/Gallery/GalleryDetail";
import styles from "./IllustrationsDetail.module.css";

class IllustrationsDetail extends Component {
    state = {
        designs: {
            id: 1,
            title: "Hello World",
            desc:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            designUrls: [
                "http://lorempixel.com/630/930/",
                "http://lorempixel.com/630/930/",
                "http://lorempixel.com/630/930/"
            ]
        },
        classeLoaded: null
    };

    componentDidUpdate(prevProps) {
        const { history } = this.props;
        if (history.location.key !== prevProps.history.location.key) {
            this.setState({
                classeLoaded: styles.illustrations_detail_container_loaded
            });
        }
    }

    render() {
        const { designs, classeLoaded } = this.state;
        return (
            <div className={[styles.illustrations_detail_container, classeLoaded].join(" ")}>
                <div className={styles.illustrations_detail_gallery}>
                    <GalleryDetail designs={designs} />
                </div>
                <div className={styles.illustrations_detail_navigator}>
                    <div className={styles.illustrations_detail_navigator_left}>
                        <FontAwesomeIcon icon="chevron-left" />
                    </div>
                    <Link to="/illustrations">
                        <div className={styles.illustrations_detail_navigator_home} />
                    </Link>
                    <div className={styles.illustrations_detail_navigator_right}>
                        <FontAwesomeIcon icon="chevron-right" />
                    </div>
                </div>
            </div>
        );
    }
}

export default IllustrationsDetail;
