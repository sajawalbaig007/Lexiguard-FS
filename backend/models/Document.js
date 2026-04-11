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

    // 🖼️ ADD THIS (LOGOS STORAGE)
    logos: {
      type: [String], // base64 images or URLs
      default: [],
    },

    // 🔥 Soft delete system
    isDeleted: {
      type: Boolean,
      default: false,
      index: true,
    },

    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Document ||
  mongoose.model("Document", documentSchema);