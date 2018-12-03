import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import NavbarItem from "./NavbarItem";
import ImageLoader from "../ImageLoader";
import Logo from "../../assets/images/logo.png";

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            isNavMobileClicked: false
        };
    }

    handleNavMobileClicked = () => {
        const { isNavMobileClicked } = this.state;
        this.setState({
            isNavMobileClicked: !isNavMobileClicked
        });
    }

    render() {
        const { isNavMobileClicked } = this.state;
        return (
            <nav className={styles.navbar_container}>
                <div className={styles.navbar_mobile_container} role="navigation">
                    <div
                        className={styles.navbar_mobile_button}
                        onClick={this.handleNavMobileClicked}
                        role="presentation"
                    >
                        <div className={styles.navbar_mobile_bar} />
                        <div className={styles.navbar_mobile_bar} />
                        <div className={styles.navbar_mobile_bar} />
                    </div>
                    <div className={styles.navbar_mobile_list} style={{ maxHeight: isNavMobileClicked ? "0" : "20rem" }}>
                        <NavbarItem />
                    </div>
                    <div className={styles.navbar_mobile_brand_container}>
                        <div className={styles.navbar_mobile_brand}>
                            <NavLink to="/">
                                <ImageLoader srcLoaded={Logo} />
                            </NavLink>
                        </div>
                    </div>
                </div>
                <ul className={styles.navbar_list}>
                    <NavbarItem />
                </ul>
            </nav>
        );
    }
}

export default Navbar;
