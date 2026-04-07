import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    templateName: {
      type: String,
      required: true,
    },
    content: {
      type: String, // FULL HTML
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);

export default mongoose.model("Document", documentSchema);