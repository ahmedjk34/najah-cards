import React from "react";
import styles from "./nav.module.scss";
import Link from "next/link";
type Props = {};

function Nav({}: Props) {
  let isAuthenticated = false;
  return (
    <div className={styles.nav}>
      <h2>
        <Link href="/">Najah Cards</Link>
      </h2>
      {isAuthenticated ? (
        <div>{/*profile meny*/}</div>
      ) : (
        <div className={styles.authLinksHolder}>
          <Link href="">Sign Up</Link>
          <Link href="">Login</Link>
        </div>
      )}
    </div>
  );
}

export default Nav;
