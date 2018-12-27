/* eslint react/jsx-one-expression-per-line: 0*/

import React from "react";
import styles from "./About.module.css";
import ImageLoader from "../../components/ImageLoader";
import Image from "../../assets/images/about-photo.jpg";

const About = () => (
    <div className={styles.about_container}>
        <div className={styles.about_info}>
            <h2 className={styles.about_title}>Finendi Wardhana</h2>
            <p>
                Finendi Wardhana is a freelance illustrator and graphic designer from Bekasi,
                Indonesia.
            </p>
            <p>
                Finendi specialize mainly in Illustrations portraits and logo designs. Clients
                include Samabas Wirasena Sinergi, Golden Guest, Nasatur, among others.
            </p>
            <p>
                For business enquires or info:{" "}
                <a href="mailto:finendi11@gmail.com">finendi11@gmail.com</a>
            </p>
            <p>
                You can follow Finendi on{" "}
                <a href="https://www.instagram.com/miqdad_af/"> Instagram </a>,{" "}
                <a href="https://twitter/mqdfwz">Twitter</a> and{" "}
                <a href="https://www.facebook.com/miqdad.fawwaz"> Facebook</a>.
            </p>
        </div>
        <div className={styles.about_photo}>
            <div className={styles.about_photo_container}>
                <ImageLoader srcLoaded={Image} />
            </div>
        </div>
    </div>
);

export default About;
