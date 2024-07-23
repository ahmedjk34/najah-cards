"use client";
import { Flashcard } from "@/Types";
import React, { useState } from "react";
import styles from "./deck-page.module.scss";
type Props = {
  card: Flashcard;
};
export function Card({ card }: Props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`${styles.card} ${isActive ? styles.active : ""}`}
      onClick={() => {
        setIsActive((prev) => !prev);
      }}
    >
      <div className={styles.front}>{card.question}</div>
      <div className={styles.back}>{card.answer}</div>
    </div>
  );
}
