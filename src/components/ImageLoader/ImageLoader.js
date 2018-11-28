import React, { Component } from "react";
import Placeholder from "../../assets/images/placeholder.png";
import styles from "./ImageLoader.module.css";

class ImageLoader extends Component {
    constructor(props) {
        super(props);
        this.imageHd = null;
    }

    componentDidMount() {
        const { srcLoaded } = this.props;
        const hdLoaderImg = new Image();
        hdLoaderImg.src = srcLoaded;
        hdLoaderImg.onload = () => {
            this.imageHd.setAttribute(
                "style",
                `background-image: url('${srcLoaded}')`
            );
            this.imageHd.classList.add(styles.image_fade_in);
        };
    }

    render() {
        return (
            <div className={styles.image_container}>
                <div
                    className={styles.image_loaded}
                    ref={imgLoadedElem => { this.imageHd = imgLoadedElem; }}
                />
                <div
                    className={styles.image_preloaded}
                    style={{ backgroundImage: `url('${Placeholder}')` }}
                />
            </div>
        );
    }
}

export default ImageLoader;
