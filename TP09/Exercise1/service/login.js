const users = require('../models/users')

const login = async (email, password) => {
    try {
        // //check both email and password at the sametime
        // var existed = await users.findOne({ email, password })
        // console.log(existed.password);
        // if(!existed){
        //     throw "Email or Password is incorrected."
        // }
        // return {
        //     success: true,
        //     data: existed
        // }

        //check email then check password and give difference
        var existed = await users.findOne({email})
        if(!existed){
            throw "Email is incorrected."
        } 
        if(existed.password != password){
            throw "Password is incorrected."
        }
        return {
            success: true,
            data: existed
        }
    } catch (err) {
        return {
            success: false,
            err: err
        }
    }
}

module.exports = {
    login
}