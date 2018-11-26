import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavbarItem.module.css";
import Logo from "../../../../assets/images/logo.png";

const NavbarItem = () => (
    <Fragment>
        <li className={styles.navbaritem}>
            <div className={styles.navbaritem_brand_wrapper}>
                <img
                    src={Logo}
                    alt="Finendisgn Logo"
                    className={styles.navbaritem_brand_logo}
                />
            </div>
        </li>
        <li className={styles.navbaritem}>
            <NavLink exact activeClassName={styles.navitem_active} to="/contact">CONTACT</NavLink>
        </li>
    </Fragment>
);

export default NavbarItem;
