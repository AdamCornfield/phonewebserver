const express = require("express")

var app = express()

app.get('/', (req, res) => {
    res.sendStatus(200)
})

app.listen(8000, () => {
    console.log("Running on port 8000")
})