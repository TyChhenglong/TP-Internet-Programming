
const User=require('../db/blog/table')
const {RegisterValidation,LoginValidation}=require('./validation/userValidation')
function check_register(req,res,next){
    const data=req.body;
    const {error}=RegisterValidation(data);
    if(error){ return res.status(400).send(error.details[0].message);}
    next()
}
function check_login(req,res,next){
    const data=req.body;
    const {error}=LoginValidation(data);
    if(error){ return res.status(400).send(error.details[0].message);}
    next()
}

async function  check_credentail(req,res,next){
    const data=req.body;
    let user=await User.findOne({email:data.email})
    if(user) return res.status(400).send({"msg":"Email already taken"})
    user=await User.findOne({email:data.email})
    if(user) return res.status(400).send({"msg":"Email already taken"})
    next()
}

async function check_password(req,res,next){
    if(req.body.password!=req.body.repeat_password){
        return res.status(400).send({"message": "Password incorrect"})
    }
    next()
}   

module.exports.check_register=check_register
module.exports.check_login=check_login
module.exports.check_credentail=check_credentail
module.exports.check_password=check_password