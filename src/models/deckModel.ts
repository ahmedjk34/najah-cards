import mongoose, { Model } from "mongoose";
import { Deck as DeckType, Flashcard as FlashcardType } from "@/Types";
import userModel from "./userModel";

const { Schema } = mongoose;

const flashcardSchema = new Schema<FlashcardType>({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const deckSchema = new Schema<DeckType>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
    required: true,
  },
  quiz: {
    type: String,
    default: "",
  },
  flashcards: [flashcardSchema],
  author: {
    type: Schema.Types.ObjectId,
    ref: userModel,
    required: true,
  },
});

const deckModel: Model<DeckType> =
  mongoose.models.Deck || mongoose.model<DeckType>("Deck", deckSchema);

export default deckModel;
