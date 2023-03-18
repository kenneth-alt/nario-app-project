// @desc get entries // @route GET /entries // @access Private
const getEntries = (req, res) => {
    res.send('get entries')
}

// @desc create entries // @route POST /entries // @access Private
const createEntries = (req, res) => {
    res.send('create entries')
}

// @desc update entries // @route PUT /entries // @access Private
const updateEntries = (req, res) => {
    res.send(`update entries ${req.params.id}`)
}

// @desc delete entries // @route DELETE /entries // @access Private
const deleteEntries = (req, res) => {
    res.send(`delete entries ${req.params.id}`)
}

module.exports {
    getEntries,
    createEntries,
    updateEntries,
    deleteEntries,
}