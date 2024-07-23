import { Card } from "./Card";
import { Flashcard } from "@/Types";
import React from "react";
import styles from "./deck-page.module.scss";
type Props = {
  flashcards: Flashcard[];
};

function CardsHolder({ flashcards }: Props) {
  return (
    <div className={styles.cardsHolder}>
      {flashcards.map((card) => (
        <Card card={card} key={card._id + "KEY"} />
      ))}
    </div>
  );
}

export default CardsHolder;
