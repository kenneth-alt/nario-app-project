import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
    _id: { type: String, required: true },
    topic: { type: String, required: true },
    content: { type: String, required: true },
    status: { type: String, default: 'started' },
    tags: { type: [String], default: [] },
    blockers: { type: [String], default: [] },
    activityLogs: { type: [{ _id: Number, activity: String, duration: Number }], default: [] }
    },
    {
        timestamps: true,
    });

const Entry = mongoose.model('entry', entrySchema);

export { Entry };