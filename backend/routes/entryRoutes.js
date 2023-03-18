import express from "express"
import { 
    getEntries, 
    createEntry, 
    updateEntry, 
    deleteEntry } from "../controllers/entryController.js"

export const router = express.Router()

router.route('/').get(getEntries).post(createEntry)
router.route('/:id').put(updateEntry).delete(deleteEntry)
