import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./Footer.module.css";

const Footer = () => (
    <div className={styles.footer}>
        <div className={styles.footer_logos}>
            <div>
                <a href="mailto:finendi11@gmail.com" target="_top">
                    <FontAwesomeIcon icon="envelope" color="#fff" size="xs" />
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/finendi.wardhana" target="_top">
                    <FontAwesomeIcon icon={["fab", "facebook-f"]} color="#fff" size="xs" />
                </a>
            </div>
            <div>
                <a href="https://twitter.com/finendi" target="_top">
                    <FontAwesomeIcon icon={["fab", "twitter"]} color="#fff" size="xs" />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/finendisign/" target="_top">
                    <FontAwesomeIcon icon={["fab", "instagram"]} color="#fff" size="xs" />
                </a>
            </div>
        </div>
    </div>
);

export default Footer;
