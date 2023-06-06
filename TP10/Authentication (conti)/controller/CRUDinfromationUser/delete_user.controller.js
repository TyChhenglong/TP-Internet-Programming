const table = require("../../db/blog/table");
const delete_user = async (req,res) => {
    try {
        const user = req.user
        console.log(user.data[0])    
        if(user.success == true){
            console.log(user)
            const result = await table.deleteMany({ username :user.data[0].username});
            res.json({
                success: true,
                message:"Delete Success"
            })
        }else{
            res.json({
                success: false,
                message:"Your information invalid"
            })
        }
    } catch (error) {
        res.json({
            error: true,
            message: error.message
        })
    }   
    
}
module.exports = {delete_user}