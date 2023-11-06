
const database=require('../database/db')

exports.postAppointment = (req, res) =>{
    const name=req.body.name
    const email=req.body.email
    const phoneNumber=req.body.phoneNumber

    const sql="insert into appoiment (name, email, phoneNumber)values(?,?,?)"
    database.query(sql,[name,email,phoneNumber],(err, result)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect("/show-appointments")
        }
    })

}
exports.getAppointment =(req, res) =>{
    
    res.render("index")


}