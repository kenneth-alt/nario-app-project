import express from "express"
import { 
    getEntries, 
    createEntry, 
    updateEntry, 
    deleteEntry } from "../controllers/entryController.js"

export const router = express.Router()


router.get('/', getEntries)

router.post('/', createEntry)

router.put('/:id', updateEntry)

router.delete('/:id', deleteEntry)