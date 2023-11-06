const express=require("express")
const routes=express.Router()
const controller=require('../controllers/main')


routes.get('/add-appointment',controller.getAppointment)
routes.post("/add-appointment",controller.postAppointment)

module.exports = routes