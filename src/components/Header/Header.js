import React from "react";

import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

const Header = () => {

  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <Link to="/">
          <h1>Logo</h1>
        </Link>
        <div className={styles.loginWrapper}>
          <button className={styles.loginButton}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
