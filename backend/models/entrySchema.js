import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
    topic: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    created_at: {
      type: Date,
      default: Date.now
    }
  });

const Entry = mongoose.model('Entry', entrySchema);

export { Entry };