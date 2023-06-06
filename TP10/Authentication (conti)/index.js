const express = require("express");
const app = express();
const router = express.Router();
const path = require("path"); // The Path module provides a way of working with directories and file paths.
const cookieParser = require("cookie-parser");

app.use(express.text())

app.use(express.json()) // user json packge in express
app.use(cookieParser()) 
app.use(router)
require("./router/user.router")(app);
app.use('/static',express.static(path.join(__dirname, "/image"))); // return file from image directory and /static is middleware 
const port = 8080;
app.listen(port, () => {
    console.log("http://localhost: "+ port);
})  