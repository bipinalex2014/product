const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require('dotenv')
const cors = require("cors")

const productRouter = require("./routes/product")
const req = require("express/lib/request")


dotenv.config()

mongoose.connect(process.env.MONGO_URLS).then((data)=>{
    
    console.log("Database connection successfull")
}).catch((err)=>{
    console.log(err)
})

app.use(cors())
app.use(express.json())
app.use("/api/product", productRouter)


app.listen(3000,()=>{
    console.log("port listening at 3000")
})