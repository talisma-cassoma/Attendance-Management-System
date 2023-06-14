const express = require('express');
const routes = express.Router();
/** Require multer */
const multer = require('multer')

const upload = multer({ dest: 'public/assets/uploads/' })

routes.get('/', (resquest, response) => {
    return response.sendFile(__dirname + "/views/index.html")
})

routes.get('/train', (resquest, response) => {
    return response.sendFile(__dirname + "/views/train.html")
})

// Define an express route with multer middleware
routes.post('/upload',
    upload.fields([
        { name: 'model.json', maxCount: 1 },
        { name: 'model.weights.bin', maxCount: 1 }
    ]),
    (req, res)=>{
        // req.body contains the text fields
        // req.files contains the file fields
        // Do something with the files and the body
        console.log(req.fieldname, req.body, req.files)
        res.send('Files uploaded to server')
    })
    
routes.get('/test',(req, res)=>{
    res.sendFile(__dirname + "/views/test.html")
})

module.exports = routes;