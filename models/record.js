import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
  userId: String,
  symptoms: String,
  diagnosis: Array,
  risk: String,
  advice: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Record", recordSchema);
