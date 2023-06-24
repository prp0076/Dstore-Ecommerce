const express = require("express")
const UserModel = require("../model/Auth");
const {RegisterController} = require("../controller/authController")
const Route= express.Router();

//regitser routes
Route.post('/register',RegisterController);

//login roures
Route.post('/login',LoginController)

