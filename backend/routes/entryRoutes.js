import express from "express"
import { protect } from "../middleware/authMiddleware.js"
import { 
    getEntries, 
    createEntry, 
    updateEntry, 
    deleteEntry,
    findEntryById, } from "../controllers/entryController.js"

export const entriesRouter = express.Router()

entriesRouter.post('/', protect, createEntry)

entriesRouter.get('/', protect, getEntries) 

entriesRouter.patch('/:id', protect, updateEntry) 

entriesRouter.delete('/:id', protect, deleteEntry)

entriesRouter.get("/:id", findEntryById)