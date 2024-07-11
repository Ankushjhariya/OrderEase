import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const Feedback = mongoose.model("Feedback", feedbackSchema);