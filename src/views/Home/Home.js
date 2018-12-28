import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Home.module.css";
import Logo from "../../assets/images/logo.png";
import Background from "../../assets/images/background.jpg";

import Button from "../../components/Common/Button";

const Home = () => (
    <div className={styles.home_container}>
        <div
            className={styles.home_background_container}
            style={{ backgroundImage: `url(${Background})` }}
        >
            <div className={styles.home_background_backdrop} />
        </div>
        <div className={styles.home_title_wrapper}>
            <div className={styles.home_logo_wrapper}>
                <img src={Logo} alt="Finendisgn Logo" className={styles.home_logo} />
            </div>
            <h1 className={styles.home_title}>finendisign</h1>
        </div>
        <div className={styles.home_button_wrapper}>
            <NavLink to="/illustrations">
                <Button type="button" classBtn="home">
                    ENTER
                </Button>
            </NavLink>
        </div>
    </div>
);

export default Home;
