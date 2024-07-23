import { Deck } from "@/Types";
import CardsHolder from "@/components/DeckPage/CardsHolder";
import axios from "axios";
import { notFound } from "next/navigation";
import React from "react";
import styles from "../../../components/DeckPage/deck-page.module.scss";

type Props = {
  params: { id: string };
};

async function page({ params }: Props) {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/deck/${params.id}`
    );
    const deck: Deck = response.data;
    if (!deck) throw new Error("Deck not Found");

    return (
      <div className={styles.deckPage}>
        <CardsHolder flashcards={deck.flashcards} />
      </div>
    );
  } catch (error) {
    notFound();
  }
}

export default page;
