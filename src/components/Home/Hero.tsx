import React from "react";
import styles from "./home.module.scss";

type Props = {};

function Hero({}: Props) {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInfo}>
        <h1>Najah Cards - Your Ultimate Flashcard Learning Platform</h1>
        <span></span>
      </div>
    </div>
  );
}

export default Hero;
