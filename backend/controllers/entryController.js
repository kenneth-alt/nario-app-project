import { Entry } from "../models/entrySchema.js"


// create entries // route POST /entries // access Private
const createEntry = async (req, res) => {
    const newEntry = req.body
    const user = req.user.email
    try {
        const entry = { userEmail: user, ...newEntry }
       // console.log(entry)
        const createdEntry = await Entry.create(entry)
        res.send(`Success, added ${createdEntry.topic} - by ${createdEntry.userEmail}`)
    } catch (error) {
        if ((error.code = 11000)) {
            console.log("ERROR! _id CANNOT be duplicated!")
            res.status(500).send("ERROR! _id CANNOT be duplicated")
        } else 
            res.status(403).send(error.message)
    }
}


// get entries // route GET /entries // access Private
const getEntries = async (req, res) => {
    try {
        const allEntries = await Entry.find()
        res.send(allEntries)
    } catch (error) {
        res.status(404).send(error.message)
    }  

    if (!allEntries) {
        throw new Error('No entries found')
    }
}


// update entries // route PUT /entries/:id // access Private
const updateEntry = async (req, res) => {
    const id = req.params.id
    const newEntryData = req.body
    try {
        const updatedEntry = await Entry.findByIdAndUpdate(id, newEntryData, {
        new: true,}) 
        res.send(`Updated ${updatedEntry.topic} - id ${id}`)
    } catch (error) {
        res.status(403).send(error.message)
    }
}


// delete entries // route DELETE /entries/:id // access Private
const deleteEntry = async (req, res) => {
    const id = req.params.id
    try {
        const deletedEntry = await Entry.findByIdAndDelete(id)
        res.send(`Deleted ${deletedEntry.topic} - id ${id}`)
    } catch (error) {
        res.status(403).send(error.message)
    }
}


// get entries by id // route GET /entries/:id
const findEntryById = async (req, res) => {
    try {
        const entry = await Entry.findById(id)
        res.send(entry);
    } catch (error) {
        res.status(404).send(error.message);
    }
  }


export {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntry,
    findEntryById,
}