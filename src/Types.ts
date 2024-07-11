import { ObjectId } from "mongoose";

export interface Subject {
  _id: ObjectId;
  image: string;
  title: string;
  description: string;
  decks: Deck[];
}

export interface Deck {
  _id: ObjectId;
  title: string;
  description: string;
  rating: number;
  quiz: string;
  flashcards: Flashcard[];
  author: User;
}

export interface Flashcard {
  _id: ObjectId;
  question: string;
  answer: string;
}

export interface User {
  _id: ObjectId;
  username: string;
  email: string;
  profile_picture: string;
  password: string;
  flashcard_decks: Deck[];
  progress: string[];
}
