const express = require("express")

const app = express()
const port = 2223

app.get('/backend', (req, res) => {
    res.send("testing backend")
});


app.listen(port, () => {});