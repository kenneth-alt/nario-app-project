import asyncHandler from "express-async-handler"
import { Entry } from "../models/entrySchema.js"
import { User } from "../models/userSchema.js"


// create entries // route POST /entries // access Private
const createEntry = asyncHandler(async (req, res) => {
    const newEntry = req.body
    const user = req.user.email
    try {
        const entry = { userEmail: user, ...newEntry }
        const createdEntry = await Entry.create(entry)

        res.status(201).send(`Success, added ${createdEntry.topic} - id ${createdEntry._id} - by ${createdEntry.userEmail}`)
    } catch (error) {
        if (error.code == 11000) {
            res.status(500).send("ERROR! _id CANNOT be duplicated")
        } else 
            res.status(403).send(error.message)
    }
})


// get entries // route GET /entries // access Private
const getEntries = asyncHandler(async (req, res) => {
    try {
        const allEntries = await Entry.find()
        res.send(allEntries)
    } catch (error) {
        res.status(404).send(error.message)
    }  

    if (!allEntries) {
        throw new Error('No entries found')
    }
})


// update entries // route PUT /entries/:id // access Private
const updateEntry = asyncHandler(async (req, res) => {
    const id = req.params.id
    const newEntryData = req.body

    const entry = await Entry.findById(id)

    try {
        const registeredEmail = req.user.email
        console.log(registeredEmail)

        const entryEmail = entry.userEmail
        console.log(entryEmail)

        // Check if user exists
        if (!registeredEmail) {
            res.status(401)
            throw new Error('User not found')
        }

        // Check that logged in user matches owns the entry
        if (entryEmail !== registeredEmail) {
            res.status(401)
            throw new Error('Not Authorized, you can only edit your own entries!')
        }

        const updatedEntry = await Entry.findByIdAndUpdate(id, newEntryData, {
        new: true,}) 
        res.send(`Updated ${updatedEntry.topic} - id ${id}`)
    } catch (error) {
        res.status(403).send(error.message)
    }
})


// delete entries // route DELETE /entries/:id // access Private
const deleteEntry = asyncHandler(async (req, res) => {
    const id = req.params.id

    const entry = await Entry.findById(id)

    try {
        const registeredEmail = req.user.email
        console.log(registeredEmail)

        const entryEmail = entry.userEmail
        console.log(entryEmail)

        // Check if user exists
        if (!registeredEmail) {
            res.status(401)
            throw new Error('User not found')
        }

        // Check that logged in user matches owns the entry
        if (entryEmail !== registeredEmail) {
            res.status(401)
            throw new Error('Not Authorized, you can only delete your own entries!')
        }

        const deletedEntry = await Entry.findByIdAndDelete(id)
        res.send(`Deleted ${deletedEntry.topic} - id ${id}`)
    } catch (error) {
        res.status(403).send(error.message)
    }
}) 


// get entries by id // route GET /entries/:id
const findEntryById = asyncHandler(async (req, res) => {
    const id = req.params.id
    try {
        const foundEntry = await Entry.findById(id)
        res.send(foundEntry);
    } catch (error) {
        res.status(404).send(error.message);
    }
  })


export {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntry,
    findEntryById,
}