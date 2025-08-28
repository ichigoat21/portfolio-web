import express from "express"
import dotenv from "dotenv"
import "./server"


dotenv.config();

const app = express()

app.listen(3000, ()=> {
    console.log("server started");
})