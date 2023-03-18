import express from "express"
import { getEntries, createEntries, updateEntries, deleteEntries } from "../controllers/routeController.js"

export const router = express.Router()


router.get('/', getEntries)

router.post('/', createEntries)

router.put('/:id', updateEntries)

router.delete('/:id', deleteEntries)