import mongoose from "mongoose";

const entrySchema = new mongoose.Schema({
    _id: { type: String, required: true },
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
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

export const Entry = mongoose.model('Entry', entrySchema);