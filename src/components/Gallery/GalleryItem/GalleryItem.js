import React, { Fragment } from "react";
import ImageLoader from "../../ImageLoader";
import styles from "./GalleryItem.module.css";

const GalleryItem = ({ onClick, design }) => (
    <Fragment>
        <div className={styles.gallery_item_container} onClick={onClick} role="presentation">
            <ImageLoader srcLoaded={design.design} className={styles.gallery_item_image} />
            <div className={styles.gallery_item_overlay}>
                <div className={styles.gallery_item_details}>
                    <div className={styles.gallery_item_name}>
                        {design.title}
                    </div>
                    <div>
                        -View-
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
);

export default GalleryItem;
