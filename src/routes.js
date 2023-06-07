const express = require('express');
const routes = express.Router();


routes.get('/',(resquest, response)=>{
    return response.sendFile(__dirname + "/views/index.html")
})
 
module.exports = routes;