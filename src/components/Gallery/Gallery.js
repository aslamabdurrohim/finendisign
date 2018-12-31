import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import GalleryItem from "./GalleryItem";
import styles from "./Gallery.module.css";

class Gallery extends Component {
    handleItemCick = ({ id, title }) => {
        const { history, match } = this.props;
        const nameURL = title
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");

        history.push(`${match.path}/${nameURL}?id=${id}`);
    };

    render() {
        const { designs } = this.props;
        return (
            <div className={styles.gallery_container}>
                {designs.map((design, index) => (
                    <div className={styles.gallery_wrapper} key={index}>
                        <GalleryItem design={design} onClick={() => this.handleItemCick(design)} />
                    </div>
                ))}
            </div>
        );
    }
}

export default withRouter(Gallery);
