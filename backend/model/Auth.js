const mongoose = require("mongoose");
const Schema = mongoose.Schema();
const UserModel = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('users',UserModel);