// models/Subject.js
import mongoose, { Model } from "mongoose";
import { Subject as SubjectType } from "@/Types";

const { Schema } = mongoose;

const subjectSchema = new Schema<SubjectType>({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const subjectModal: Model<SubjectType> =
  mongoose.models.Subject ||
  mongoose.model<SubjectType>("Subject", subjectSchema);

export default subjectModal;
