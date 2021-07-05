const express = require('express')
require("../src/db/conn")
const MensRanking = require("../src/models/mens")

const app = express();
const port = process.env.PORT || 4000

app.get("/",async(req,res)=>{
    res.send("Hey there")
})


app.listen(port,()=>{
    console.log(`your reques is send to the port ${port}`)
})