import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../../../components/Layout";
import GalleryDetail from "../../../components/Gallery/GalleryDetail";
import styles from "./IllustrationsDetail.module.css";

class IllustrationsDetail extends Component {
    state = {
        designs: {
            id: 1,
            title: "Hello World",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            designUrls: ["http://lorempixel.com/630/930/", "http://lorempixel.com/630/930/", "http://lorempixel.com/630/930/"]
        }
    };

    render() {
        const { designs } = this.state;
        return (
            <Layout nomargin>
                <div className={styles.illustrations_detail_container}>
                    <div className={styles.illustrations_detail_gallery}>
                        <GalleryDetail designs={designs} />
                    </div>
                    <div className={styles.illustrations_detail_navigator}>
                        <div className={styles.illustrations_detail_navigator_left}>
                            <FontAwesomeIcon icon="chevron-left" />
                        </div>
                        <div className={styles.illustrations_detail_navigator_right}>
                            <FontAwesomeIcon icon="chevron-right" />
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default IllustrationsDetail;
