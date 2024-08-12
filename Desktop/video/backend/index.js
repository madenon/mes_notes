const express = require("express");
const mongoose = require("mongoose");
const app = express();

const mongodbUri = "mongodb+srv://kissak654:video@cluster0.hzo9i.mongodb.net/video"
const PORT=4000;


mongoose.connect(mongodbUri, {
    useNewUrlParser:true,
    useUnifiedTopology: true,

});
mongoose.connection.on("Connected", () =>{
    console.log('connexion a mongodb');
});

mongoose.connection.on("error", (err) =>{
    console.log('errur mongodb', err)
});

app.listen(4000, ()=>{
    console.log(`Server connecter au port http://localhost:${PORT}`)
})