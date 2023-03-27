import express from "express"
import { 
    getEntries, 
    createEntry, 
    updateEntry, 
    deleteEntry,
    findEntryById, } from "../controllers/entryController.js"

export const entriesRouter = express.Router()

entriesRouter.post('/', createEntry)

entriesRouter.get('/', getEntries) 

entriesRouter.patch('/:id', updateEntry) 

entriesRouter.delete('/:id', deleteEntry)

entriesRouter.get("/:id", findEntryById)