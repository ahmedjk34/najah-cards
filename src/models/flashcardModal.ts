import mongoose, { Model } from "mongoose";
import { Flashcard as FlashcardType } from "@/Types";

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

const flashcardModel: Model<FlashcardType> =
  mongoose.models.Flashcard ||
  mongoose.model<FlashcardType>("Flashcard", flashcardSchema);

export default flashcardModel;
