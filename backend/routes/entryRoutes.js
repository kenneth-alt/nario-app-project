import express from "express"
import { 
    getEntries, 
    createEntry, 
    updateEntry, 
    deleteEntry,
    findEntryById, } from "../controllers/entryController.js"

export const entriesRouter = express.Router()

entriesRouter.post('/', async (req, res) => {
    const newEntry = req.body
    try {
        const id = await createEntry(newEntry)
        res.send(`Success, added ${newEntry.topic} - id ${id}`)
    } catch (error) {
        res.status(403).send(error.message)
    }
})

entriesRouter.get('/', async (req, res) => {
    try {
        const allEntries = await getEntries()
        res.send(allEntries)
    } catch (error) {
        res.status(404).send(error.message)
    }  
})

entriesRouter.patch('/:id', async (req, res) => {
    const id = req.params.id
    const newEntryData = req.body
    try {
        const updatedEntry = await updateEntry(id, newEntryData)
        res.send(`Updated ${updatedEntry.topic} - id ${id}`)
    } catch (error) {
        res.status(403).send(error.message)
    }
})

entriesRouter.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const deletedEntry = await deleteEntry(id)
        res.send(`Deleted ${deletedEntry.topic} - id ${id}`)
    } catch (error) {
        res.status(403).send(error.message)
    }
})

entriesRouter.get("/:id", async (req, res) => {
    try {
      const entry = await findEntryById();
      res.send(entry);
    } catch (error) {
      res.status(404).send(error.message);
    }
  });