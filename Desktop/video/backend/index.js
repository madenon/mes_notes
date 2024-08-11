const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')
const PORT =4000


const app = express()


app.listen(4000, () =>{
    console.log(`Server lancé sur le port  http://localhost:${PORT}`)
})


