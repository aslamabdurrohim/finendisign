import React, { Component } from "react";
import styles from "./ImageLoader.module.css";

class ImageLoader extends Component {
    constructor(props) {
        super(props);
        this.imageHd = null;
        this.loader = null;
    }

    componentDidMount() {
        const { srcLoaded } = this.props;
        const hdLoaderImg = new Image();
        hdLoaderImg.src = srcLoaded;

        hdLoaderImg.onload = () => {
            this.imageHd.setAttribute(
                "src",
                srcLoaded
            );

            this.imageHd.setAttribute(
                "style",
                "display:block"
            );

            this.imageHd.classList.add(styles.image_fade_in);
            this.loader.classList.add(styles.spinner_hidden);
        };
    }

    handleImageLoad = imgLoadedElem => {
        this.imageHd = imgLoadedElem;
    }

    render() {
        const { className } = this.props;
        return (
            <div className={[styles.image_container, className].join(" ")}>
                <img
                    className={styles.image_loaded}
                    ref={this.handleImageLoad}
                    alt="displayed img"
                />
                <div className={styles.spinner} ref={spinnerLoadedElem => { this.loader = spinnerLoadedElem; }}>
                    <div className={styles.rect1} />
                    <div className={styles.rect2} />
                    <div className={styles.rect3} />
                    <div className={styles.rect4} />
                    <div className={styles.rect5} />
                </div>
            </div>
        );
    }
}

export default ImageLoader;
