import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
    topic: {type: String, required: true},
    content: {type: String, required: true},
    status: {type: String, default: 'started'},
    blockers: String,
    created_at: {type: Date, default: Date.now},
  });

const Entry = mongoose.model('entry', entrySchema);

export { Entry };