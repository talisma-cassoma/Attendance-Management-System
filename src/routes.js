const express = require('express');
const routes = express.Router();


routes.get('/',(resquest, response)=>{
    return response.sendFile(__dirname + "/views/index.html")
})
 
routes.get('/train',(resquest, response)=>{
    return response.sendFile(__dirname + "/views/train.html")
})
module.exports = routes;