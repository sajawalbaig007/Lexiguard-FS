 import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    templateName: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String, // FULL HTML
      required: true,
    },

    formData: {
      type: Object, // user answers
      default: {},
    },

    // 🔥 Soft delete system
    isDeleted: {
      type: Boolean,
      default: false,
      index: true, // ⚡ faster queries (important)
    },

    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true, // createdAt + updatedAt
  }
);

// 🔥 Prevent model overwrite error in Next.js / Nodemon
export default mongoose.models.Document ||
  mongoose.model("Document", documentSchema);