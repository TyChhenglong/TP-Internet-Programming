const User=require('../db/blog/table')
const jwt = require("jsonwebtoken");
require("dotenv").config();
const authorization = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(req.body);
    if (!token) {
        return res.status(401).json({
            msg:'Invalid Token',
        });
    }
    try {
      const data = jwt.verify(token, "YOUR_SECRET_KEY");
      console.log("", data);
      req.user = data
      return next();
    } catch(err) {
        return res.status(402).json({
            msg:'Invalid Token',
        });
    }
};
module.exports = {authorization}