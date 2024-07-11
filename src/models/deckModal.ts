import mongoose, { Model } from "mongoose";
import { Deck as DeckType } from "@/Types";

const { Schema } = mongoose;

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
    required: true,
  },
  quiz: {
    type: String,
    required: true,
  },
  flashcards: [
    {
      type: Schema.Types.ObjectId,
      ref: "Flashcard",
    },
  ],
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const deckModel: Model<DeckType> =
  mongoose.models.Deck || mongoose.model<DeckType>("Deck", deckSchema);

export default deckModel;
