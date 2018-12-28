import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GalleryDetail from "../../../components/Gallery/GalleryDetail";
import styles from "./LogosDetail.module.css";

class LogosDetail extends Component {
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
        }
    };

    render() {
        const { designs } = this.state;
        return (
            <div className={styles.logos_detail_container}>
                <div className={styles.logos_detail_gallery}>
                    <GalleryDetail designs={designs} />
                </div>
                <div className={styles.logos_detail_navigator}>
                    <div className={styles.logos_detail_navigator_left}>
                        <FontAwesomeIcon icon="chevron-left" />
                    </div>
                    <Link to="/logos">
                        <div className={styles.logos_detail_navigator_home} />
                    </Link>
                    <div className={styles.logos_detail_navigator_right}>
                        <FontAwesomeIcon icon="chevron-right" />
                    </div>
                </div>
            </div>
        );
    }
}

export default LogosDetail;
