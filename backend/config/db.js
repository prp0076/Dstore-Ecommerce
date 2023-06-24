const mongoose = require("mongoose");
const mongouri="mongodb+srv://prp313918:prp313918@cluster0.zi21uhc.mongodb.net/dstore?retryWrites=true&w=majority"
const ConnectDb = async()=>{
    try {
        const connect = mongoose.connect(mongouri);
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
}
module.exports=ConnectDb;