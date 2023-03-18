import express from "express"

export const router = express.Router()


router.get('/', (req, res) => {
    res.send('get entries')
})

router.post('/', (req, res) => {
    res.send('create entries')
})

router.put('/:id', (req, res) => {
    res.send(`update entries ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`delete entries ${req.params.id}`)
})