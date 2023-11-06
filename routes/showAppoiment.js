const express=require("express")
const routes=express.Router()
const controller=require("../controllers/showController")

routes.get('/show-appointments',controller.showcontroller)


module.exports=routes