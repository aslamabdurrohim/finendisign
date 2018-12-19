import React from "react";
import GalleryItem from "./GalleryItem";
import styles from "./Gallery.module.css";

const Gallery = () => (
    <div className={styles.gallery_container}>
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
    </div>
);

export default Gallery;
