const table = require("../../db/blog/table.js");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

// console.log(table);
const registerUser = async (req,res)  => {
   try {
        console.log(req.header('Authorization'));
        const {username,firstname,lastname,email,password,repeat_password}= req.body;
        const encoder_password  = bcrypt.hashSync(password, salt);
        const data = new table({
            username:username,
            firstName:firstname,
            lastName:lastname,
            email:email,
            password: encoder_password ,
            repeat_password:repeat_password,
        });
        return res.json(await data.save()) 
   } catch (error) {
        res.json({
            error: true,
        })
        console.log(error)
   }
}
module.exports = {registerUser}
