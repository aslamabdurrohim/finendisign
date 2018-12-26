import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditIcon } from "react-share";

import ImageLoader from "../../ImageLoader";
import styles from "./GalleryDetail.module.css";
import { baseURL } from "../../../utils/routes";

class GalleryDetail extends Component {
    static propTypes = {
        designs: PropTypes.objectOf(PropTypes.any).isRequired
    }

    state = {
        isShareClicked: false
    };

    handleShareClick = () => {
        const { isShareClicked } = this.state;
        this.setState({
            isShareClicked: !isShareClicked
        });
    }

    render() {
        const { designs, match } = this.props;
        const { isShareClicked } = this.state;
        const { title, desc, designUrls } = designs;

        const shareURL = baseURL + match.url;

        return (
            <div className={[styles.gallery_detail_container].join(" ")}>
                <div className={styles.gallery_detail_info_wrapper}>
                    <div className={styles.gallery_detail_info}>
                        <h2 className={styles.gallery_detail_title}>
                            {title}
                        </h2>
                        <p className={styles.gallery_detail_desc}>
                            {desc}
                        </p>
                        <div className={styles.gallery_detail_share}>
                            <div className={styles.gallery_detail_share_button} onClick={this.handleShareClick} role="presentation">
                                <FontAwesomeIcon icon="share-alt" color="#fff" size="xs" />
                            </div>
                            Share
                            <div className={styles.gallery_detail_share_content} style={{ display: isShareClicked ? "flex" : "none" }}>
                                <div className={styles.gallery_detail_share_wrapper}>
                                    <TwitterShareButton url={shareURL}>
                                        <div className={[styles.twitter, styles.gallery_detail_share_logo].join(" ")}>
                                            <TwitterIcon size={20} />
                                            <div className={styles.gallery_detail_share_text}>
                                                Tweet
                                            </div>
                                        </div>
                                    </TwitterShareButton>
                                </div>
                                <div className={styles.gallery_detail_share_wrapper}>
                                    <FacebookShareButton url={shareURL}>
                                        <div className={[styles.fb, styles.gallery_detail_share_logo].join(" ")}>
                                            <FacebookIcon size={20} />
                                            <div className={styles.gallery_detail_share_text}>
                                                Share
                                            </div>
                                        </div>
                                    </FacebookShareButton>
                                </div>
                                <div className={styles.gallery_detail_share_wrapper}>
                                    <LinkedinShareButton url={shareURL}>
                                        <div className={[styles.linkedin, styles.gallery_detail_share_logo].join(" ")}>
                                            <LinkedinIcon size={20} />
                                            <div className={styles.gallery_detail_share_text}>
                                                Share
                                            </div>
                                        </div>
                                    </LinkedinShareButton>
                                </div>
                                <div className={styles.gallery_detail_share_wrapper}>
                                    <RedditShareButton url={shareURL}>
                                        <div className={[styles.reddit, styles.gallery_detail_share_logo].join(" ")}>
                                            <RedditIcon size={20} />
                                            <div className={styles.gallery_detail_share_text}>
                                                Submit
                                            </div>
                                        </div>
                                    </RedditShareButton>
                                </div>
                            </div>
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
    }
}

export default withRouter(GalleryDetail);
