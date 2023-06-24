const express = require("express");
const app=express();
const ConnectDb = require("./config/db");
const cors=require("cors");
const dotenv = require("dotenv")
app.use(cors());
ConnectDb();
dotenv.config();




app.listen(8080,()=>{
    console.log(`server is running on 8080` );
})