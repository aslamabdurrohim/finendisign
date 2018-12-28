/* eslint no-useless-escape: 0 */

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GalleryDetail from "../GalleryDetail";
import styles from "./GalleryDetailWrapper.module.css";

const GalleryDetailWrapper = ({ designs, match }) => {
    const re = /^\/([^\/]*).*$/;
    const homeURL = match.path.replace(re, "$1");

    return (
        <div className={styles.gallery_detail_wrapper_container}>
            <div className={styles.gallery_detail_wrapper_gallery}>
                <GalleryDetail designs={designs} />
            </div>
            <div className={styles.gallery_detail_wrapper_navigator}>
                <div className={styles.gallery_detail_wrapper_navigator_left}>
                    <FontAwesomeIcon icon="chevron-left" />
                </div>
                <Link to={`/${homeURL}`}>
                    <div className={styles.gallery_detail_wrapper_navigator_home} />
                </Link>
                <div className={styles.gallery_detail_wrapper_navigator_right}>
                    <FontAwesomeIcon icon="chevron-right" />
                </div>
            </div>
        </div>
    );
};

export default GalleryDetailWrapper;
