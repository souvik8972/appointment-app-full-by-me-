const database=require('../database/db')


exports.deltecont=(req,res)=>{
    const id =req.params.id;
    const sql="delete from appoiment where id=?"
    database.query(sql,[id],(err, result)=>{

        if(err){
            console.log(err)
        }
        res.redirect("/show-appointments")

})}