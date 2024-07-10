// models/Subject.js
import { Subject } from "@/Types";
import mongoose from "mongoose";

const { Schema } = mongoose;

const subjectSchema = new Schema({
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

const subjectModal =
  mongoose.models.subjectModal ||
  mongoose.model<Subject>("Subject", subjectSchema);

export default subjectModal;
