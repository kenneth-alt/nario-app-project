import express from "express"

export const router = express.Router()


router.get('/', getEntries)

router.post('/', createEntries)

router.put('/:id', updateEntries)

router.delete('/:id', deleteEntries)