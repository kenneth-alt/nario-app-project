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
    status: {
        type: String,
        default: 'started'
        },
    tags: [{         
        type: String
        }],
    blockers: {
        type: String
        },
    activityLog: [{
        activity: {
            type: String,
            },
        duration: {
            type: Number,
            },
          }],
    created_at: {type: Date, default: Date.now},
  });

const Entry = mongoose.model('entry', entrySchema);

export { Entry };