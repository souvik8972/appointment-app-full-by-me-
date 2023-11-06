const database=require('../database/db')


exports.showcontroller=(req,res)=>{
    const sql="SELECT * FROM appoiment"
    database.query(sql,(err, result)=>{
        if(err){
            console.log(err)
        }
        res.render("show",{
           appoiment: result
        })



    });

}