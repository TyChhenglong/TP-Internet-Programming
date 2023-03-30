const express = require("express");
var bodyParser = require("body-parser");
const userService = require("./services/user");
const app = express();

const cors=require('cors');
app.use(cors({ origin: 'http://127.0.0.1:3000' }))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/", function (req, res) {
  const { email, password } = req.body;
  if (res) {
    userService.login(email, password).then((result) => {
      res.json({
        success: result,
      });
    });
  }
});

app.post("/register", function (req, res) {
  const { email, username, firstname, lastname, password} = req.body;
  let newUser = {email, username, firstname, lastname, password };
  // console.log(newUser);
  if (res) {
    userService.register(newUser).then((result) => {
      if (result) {
        console.log("Test register: ");
        res.json({
          success: result,
          newUser,
        });
      } else {
        res.json({
          success: result,
        });
      }
    });
  } else {
    res.json({
      success: false,
    });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port http://localhost:3001");
});
