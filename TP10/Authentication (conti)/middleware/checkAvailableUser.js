const table = require("../db/blog/table");

const check_available = async (req,res,next) =>{
    try {
        console.log(table);
        const data = await table.find({_id : req.body.id});
        let success ;
        if(data[0].username===req.body.username){
            success=true;
        }else{
            success=false
        }
        req.user = {success:success,data:data};
        next();
       
    } catch (error) {
        res.json({
            message: error(message),
        })
    }
}

module.exports = {check_available};