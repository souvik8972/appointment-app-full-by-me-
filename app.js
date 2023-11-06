const express=require("express")
const app=express()
require('dotenv').config();
// const database=require('./database/db')
const addroute=require('./routes/addAppoinment')
const deleteRoute=require('./routes/delete')
const editRoute=require('./routes/edit')
const showRoute=require('./routes/showAppoiment')
const indexroute=require('./routes/index')


const path=require("path")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port=process.env.PORT||5000

app.use(express.static(path.join(__dirname,'public')))
app.set("view engine", 'ejs')

app.use(indexroute)
app.use(addroute)

app.use(addroute)
app.use(showRoute)

app.use(deleteRoute)

app.use(editRoute)

app.use(editRoute)







app.listen(port,()=>{
    console.log("server is running",port);
})