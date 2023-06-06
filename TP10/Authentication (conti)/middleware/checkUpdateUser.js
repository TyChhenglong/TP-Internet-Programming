const table=require("../db/blog/table")

const update =async (req,res,next) => {
    try {

       let result = await table.updateOne(
            {username: req.body.username},
            {$set:req.body}
        )
      
        let message ;
        if(result.acknowledged){
            if(result.modifiedCount!=0){
                message = "Update your profile already 👻🤖 📨 "
            }else{
                message = "Your new information do not update 👻🤖 ❌ "
            }

        // const data = {message:message , username : username}
            req.user = { message:message,username: req.body.username}
        }
       next();
    } catch (error) {
        res.send(error) 
    }  
};
module.exports= {update}; 