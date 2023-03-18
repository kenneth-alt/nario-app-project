import mongoose from "mongoose";

const entrySchema = mongoose.Schema({
    topic: {
        type: String,
        required: [true, 'Please input a topic']
    },
    entry: {
        type: String,
        required: [true, 'Please input entry in text format']

    },
}, 
{timestamps: true,
});

const entryModel = mongoose.model('Entry', entrySchema)
export { entryModel }