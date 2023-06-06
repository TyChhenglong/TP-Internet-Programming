
// const mongoose= require("mongoose");
const { string } = require("joi");
const database = require("../data/db.js");
const { Schema, model } = database;
const blog = new Schema({
   username: String,
   firstName: String,
   lastName: String,
   email: String,
   password: String,
   repead_password: String,
});


module.exports =  database.model('Blog', blog)
