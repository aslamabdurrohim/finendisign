import React, { Fragment } from "react";
import ImageLoader from "../../ImageLoader";
import styles from "./GalleryItem.module.css";

const GalleryItem = () => (
    <Fragment>
        <div className={styles.gallery_item_container}>
            <ImageLoader srcLoaded="http://lorempixel.com/300/300/" className={styles.gallery_item_image} />
            <div className={styles.gallery_item_overlay}>
                <div className={styles.gallery_item_details}>
                    <div className={styles.gallery_item_name}>
                        Lorem Ipsum
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
