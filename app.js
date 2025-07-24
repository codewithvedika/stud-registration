const studentRoute = require("./Route/studentRoute")
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv/config")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("home")
})

app.use("/api/student",studentRoute)

app.listen(process.env.PORT || 3000)

async function db() {
    try {
        const res = await mongoose.connect(process.env.DB)
        console.log(res.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
db()