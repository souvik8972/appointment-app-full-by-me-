const express = require("express");
const routes = express.Router();
const controller = require('../controllers/editController')



routes.get('/edit/:id',controller.geteditcont);

routes.post("/edit/:id",controller.postEditCont);

module.exports = routes;
