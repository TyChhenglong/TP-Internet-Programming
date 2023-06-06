const profileUser = (req,res) => {
    delete req.user.password
    res.json({"user" : req.user}) 
    console.log("",req.user);  
}
module.exports = {profileUser} 