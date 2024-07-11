import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type Props = {};

function Footer({}: Props) {
  return (
    <div className={styles.footer}>
      <h2>
        <Link href="/">Najah Cards</Link>
      </h2>
      <h3>
        &copy; {new Date().getFullYear()} Najah Cards. All rights reserved.
      </h3>
      <h3 style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        Made by <FaGithub /> ahmedjk34
      </h3>
    </div>
  );
}

export default Footer;
