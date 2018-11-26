import React from "react";
import styles from "./Navbar.module.css";
import NavbarItem from "./NavbarItem";

const Navbar = () => (
    <nav className={styles.navbar_container}>
        <ul className={styles.navbar_list}>
            <NavbarItem />
        </ul>
    </nav>
);

export default Navbar;
