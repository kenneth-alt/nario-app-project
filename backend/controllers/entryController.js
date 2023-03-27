import { Entry } from "../models/entrySchema.js"


// @desc create entries // @route POST /entries // @access Private
const createEntry = async (newEntry) => {
    try {
        const createdEntry = await Entry.create(newEntry)
        return createdEntry._id
      } catch (error) {
        if ((error.code = 11000)) {
            throw new Error("ERROR! _id CANNOT be duplicated")
            } 
         }
}

// @desc get entries // @route GET /entries // @access Private
const getEntries = async () => {
    const allEntries = await Entry.find()

    if (!allEntries) {
        throw new Error('No entries found')
    }

    return allEntries
}

// @desc update entries // @route PUT /entries/:id // @access Private
const updateEntry = async (id, newEntryData) => {
    const response = await Entry.findByIdAndUpdate(id, newEntryData, {
        new: true,
    }) 

    if (!response) {
        throw new Error('Entry not found')
    }

    return response
}

// @desc delete entries // @route DELETE /entries/:id // @access Private
const deleteEntry = async (id) => {
    const response = await Entry.findByIdAndDelete(id)

    if (!response) {
        throw new Error('Entry not found')
    }

    return response
}

const findEntryById = async (id) => {
    const entry = await Entry.findById(id)

    if (!entry) {
        throw new Error('Entry not found')
    }

    return entry
  }

export {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntry,
    findEntryById,
}