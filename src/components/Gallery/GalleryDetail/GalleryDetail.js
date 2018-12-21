import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageLoader from "../../ImageLoader";
import styles from "./GalleryDetail.module.css";

const GalleryDetail = ({ designs }) => {
    const { title, desc, designUrls } = designs;
    return (
        <div className={styles.gallery_detail_container}>
            <div className={styles.gallery_detail_info_wrapper}>
                <div className={styles.gallery_detail_info}>
                    <h2 className={styles.gallery_detail_title}>
                        {title}
                    </h2>
                    <p className={styles.gallery_detail_desc}>
                        {desc}
                    </p>
                    <div className={styles.gallery_detail_share}>
                        <div className={styles.gallery_detail_share_button}>
                            <FontAwesomeIcon icon="share-alt" color="#fff" size="xs" />
                        </div>
                        Share
                    </div>
                </div>
            </div>
            <div className={styles.gallery_detail_designs_wrapper}>
                {
                    designUrls.map((designURL, index) => (
                        <ImageLoader srcLoaded={designURL} className={styles.gallery_detail_designs_image} key={index} />
                    ))
                }
            </div>
        </div>
    );
};

GalleryDetail.propTypes = {
    designs: PropTypes.objectOf(PropTypes.any).isRequired
};

export default GalleryDetail;
