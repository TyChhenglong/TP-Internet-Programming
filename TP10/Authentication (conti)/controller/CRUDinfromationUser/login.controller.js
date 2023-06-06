// const db = require("../db/data/db.js");
// const Cat = db.model("Cat", {name: String,age: Number}); // table or Blog
// console.log(Cat);
const { mongo } = require("mongoose");
const table = require("../../db/blog/table");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const loginUser = async (req,res) =>{
    const data = await table.find({email : req.body.email});
    const dataConvert = data[0]
    const check = bcrypt.compareSync("123kh459",dataConvert.password);
        if(check==true){
            const token = jwt.sign({
                id:dataConvert.id,
                username:dataConvert.username,
                email:dataConvert.email,
                password : dataConvert.password}, 
                "YOUR_SECRET_KEY");
            return res
                .cookie("access_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                })
                .status(200)
                .json({ message: "Logged in successfully 😊 👌",login:true});
        }else{
            res.json({
                error: "true",
                message: "incorect password"
            })
        }
  
    
}
module.exports = {
    loginUser,
}