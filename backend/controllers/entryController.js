import { entryModel } from "../models/entrySchema.js"

// @desc get entries // @route GET /entries // @access Private
const getEntries = async (req, res) => {
    const entries = await entryModel.find();
    res.status(200).json(entries);
}

// @desc create entries // @route POST /entries // @access Private
const createEntry = (req, res) => {
    res.send('create entry')
}

// @desc update entries // @route PUT /entries/:id // @access Private
const updateEntry = (req, res) => {
    res.send(`update entry ${req.params.id}`)
}

// @desc delete entries // @route DELETE /entries/:id // @access Private
const deleteEntry = (req, res) => {
    res.send(`delete entry ${req.params.id}`)
}

export {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntry,
}