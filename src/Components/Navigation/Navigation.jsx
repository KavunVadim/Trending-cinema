import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import routers from "../../utils/routers";

const Navigation = () => {
  const { HOME, MOVIES } = routers;
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            to={HOME}
            className={styles.link}
            activeClassName={styles.activeLink}
            exact
          >
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to={MOVIES}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
