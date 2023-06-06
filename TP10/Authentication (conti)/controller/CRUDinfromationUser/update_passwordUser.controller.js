const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const table = require("../../db/blog/table")

const update_password = async (req, res ) =>{
    const token = req.body.token
    const data = jwt.verify(token, "YOUR_SECRET_KEY");
    check = bcrypt.compareSync(req.body.password,data.password);
    console.log("", check);
    if(req.body.email === data.email) {
       if(check==true){
        const encoder_password  = bcrypt.hashSync(req.body.new_password, salt);
        console.log(encoder_password);
        console.log(req.body);
        let result = await table.updateOne(
          {email: req.body.email},
          {$set:{password:encoder_password,}}
        )
          console.log(result);
        const token = jwt.sign({
          id:data.id,
          username:data.username,
          email:data.email,
          password : encoder_password }, 
          "YOUR_SECRET_KEY");
      return res
          .cookie("access_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          })
          .status(200)
          .json({ message: "Update password in successfully 😊 👌",login:true});
      }else{
        res.json({err:"Your password incorrect"})
      }
    }else{
      res.json({err:"Your email incorrect"})
    }
}

module.exports = {update_password}