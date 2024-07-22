import { Deck } from "@/Types";
import React from "react";
import styles from "./subject-page.module.scss";
type Props = {
  decks: Deck[];
};

function DeckHolder({ decks }: Props) {
  return (
    <div className={styles.deckHolder}>
      {decks.map((deck, index) => (
        <div
          className={styles[`deckCard-${index + 1}`]}
          key={deck._id + index.toString()}
        >
          <div>
            <h2>{deck.title}</h2>
            <h3>{deck.description}</h3>
            <div className={styles.authorInfo}>
              <img src={deck.author.profile_picture}></img>
              <h4>
                <span>Made by: </span>
                {deck.author.username}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DeckHolder;
