import { Entry } from "../models/entrySchema.js"


// @desc create entries // @route POST /entries // @access Private
const createEntry = async (newEntry) => {
    try {
        const createdEntry = await Entry.create(newEntry);
        return createdEntry._id
      } catch (error) {
        console.error('Error creating new entry:', error);
        res.status(500).json(error);
      }
}

// @desc get entries // @route GET /entries // @access Private
const getEntries = async () => {
    const allEntries = await Entry.find();
    return allEntries;
}

// @desc update entries // @route PUT /entries/:id // @access Private
const updateEntry = async (id, newEntryData) => {
    const response = await Entry.findByIdAndUpdate(id, newEntryData, {
        new: true,
    });
    return response
}

// @desc delete entries // @route DELETE /entries/:id // @access Private
const deleteEntry = async (id) => {
    const response = await Entry.findByIdAndDelete(id)
    return response
}

export {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntry,
}