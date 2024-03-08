const express = require("express");

const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
// const Patient = require("./Models/userModel");
const patientRotues = require("./Routes/patientRotues");
dotenv.config();


connectDB();

const app  = express();

app.use(express.json());
app.get("/" ,(req,res)=>{
    res.send("api is  running");
})

app.use("/api/patient",patientRotues);

app.listen(5000,console.log("api is listening at port  = 5000"));