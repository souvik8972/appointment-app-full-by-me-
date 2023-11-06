const express=require("express")
const routes=express.Router()
const controller = require("../controllers/deletecontroller")
routes.get('/delete/:id',controller.deltecont)


module.exports=routes