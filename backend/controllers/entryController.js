import { Entry } from "../models/entrySchema.js"

// @desc get entries // @route GET /entries // @access Private
const getEntries = async (req, res) => {
    const entries = await Entry.find();
    res.status(200).json(entries);
}

// @desc create entries // @route POST /entries // @access Private
const createEntry = async (req, res) => {
    try {
        const { topic, content } = req.body;
        // Create a new post with the provided data
        const newEntry = new Entry({ topic, content });
        // Save the new post to the database
        await newEntry.save();
        
        // Send a response indicating the post was created successfully
        res.status(201).json(newEntry);

      } catch (error) {
        console.error('Error creating new post:', error);
        res.status(500).json(error);
      }
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