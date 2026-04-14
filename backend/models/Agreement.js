import mongoose from "mongoose";

const agreementSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  templateName: { 
    type: String, 
    required: true 
  },
  title: { 
    type: String, 
    required: true 
  },
  content: { 
    type: String, 
    required: true 
  },
  formData: { 
    type: Object, 
    default: {} 
  },
  status: { 
    type: String, 
    enum: ['draft', 'completed', 'saved'], 
    default: 'draft' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
}, { 
  timestamps: true 
});

// Index for faster queries
agreementSchema.index({ userId: 1, createdAt: -1 });

export default mongoose.model("Agreement", agreementSchema);
