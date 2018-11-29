import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavbarItem.module.css";
import { routes } from "../../../utils/routes";

const NavbarItem = () => (
    routes.map((route, i) => (
        <li className={styles.navbaritem} key={i}>
            <NavLink
                exact
                activeClassName={styles.navitem_active}
                to={route.to}
            >
                {route.name}
            </NavLink>
        </li>
    ))
);

export default NavbarItem;
