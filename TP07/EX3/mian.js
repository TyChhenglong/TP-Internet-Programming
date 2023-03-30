
// Importing the http module
const express=require("express");
const path = require("path");
const app=express();
const fs = require('fs');
const port=3000;

app.use(express.static(path.join(__dirname+"/public")));

app.get('/detail', function (req, res) {
  fs.readFile("./detail.html", null, (error, data)=>{
      res.write(data)
  })
})

// Server listening to port 3000
app.listen((port), () => {
    console.log("Server is Running at localhost:"+port);
})
