import mongoose, { Model } from "mongoose";
import { User as UserType } from "@/Types";

const { Schema } = mongoose;

const userSchema = new Schema<UserType>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profile_picture: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  password: {
    type: String,
    required: true,
  },
  flashcard_decks: [
    {
      type: Schema.Types.ObjectId,
      ref: "Deck",
    },
  ],
  progress: [
    {
      type: Schema.Types.ObjectId,
      ref: "Progress",
    },
  ],
});

const userModel: Model<UserType> =
  mongoose?.models?.User || mongoose.model<UserType>("User", userSchema);

export default userModel;
