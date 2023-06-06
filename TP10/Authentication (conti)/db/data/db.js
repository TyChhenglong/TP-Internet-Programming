const express = require("express")
const mongoose = require("mongoose")
const option ={
    autoIndex : false,
    maxPoolSize : 10,
    serverSelectionTimeoutMS : 5000,
    socketTimeoutMS : 45000,
    family: 4
};
mongoose.connect("mongodb://localhost:27017/newData", option)
module.exports  = mongoose;

    
