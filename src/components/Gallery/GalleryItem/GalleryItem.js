import React from "react";
import ImageLoader from "../../ImageLoader";
import styles from "./GalleryItem.module.css";

const GalleryItem = ({ onClick, design }) => (
    <div className={styles.gallery_item_container} onClick={onClick} role="presentation">
        <ImageLoader srcLoaded={design.imageURLs[0]} className={styles.gallery_item_image} />
        <div className={styles.gallery_item_overlay}>
            <div className={styles.gallery_item_details}>
                <div className={styles.gallery_item_name}>{design.title}</div>
                <div>-View-</div>
            </div>
        </div>
    </div>
);

export default GalleryItem;
