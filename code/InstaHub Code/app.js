const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const PORT = process.env.PORT || 5000
const dotenv = require("dotenv");
dotenv.config();
const MONGOURI = process.env.MONGOURI


require("./models/post");
require("./models/user");

mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected',() => {
    console.log("Connection successful to mongodb")
})
mongoose.connection.on('error',(err)=>{
    console.log("Err connecting with mongodb",err)
})


app.use(express.json())
app.use(require('./routes/user'))
app.use(require('./routes/auth'))
app.use(require('./routes/post'))


app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})

