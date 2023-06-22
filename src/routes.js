import express from 'express';
const routes = express.Router();
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


/** Require multer */
import multer from "multer"
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets/uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname)
    }
})
const upload = multer({ storage: storage })

// Define an express route with multer middleware
routes.post('/upload',
    upload.fields([
        { name: 'model.json', maxCount: 1 },
        { name: 'model.weights.bin', maxCount: 1 }
    ]),
    (req, res) => {
        // req.body contains the text fields
        // req.files contains the file fields
        // Do something with the files and the body
        console.log(req.fieldname, req.body, req.files)
        res.send('Files uploaded to server')
    })

routes.get('/', (resquest, response) => {
    return response.sendFile(__dirname + "/views/index.html")
})

routes.get('/train', (resquest, response) => {
    return response.sendFile(__dirname + "/views/train.html")
})


// routes.get('/test', (req, res) => {
//     res.sendFile(__dirname + "/views/test.html")
// })

export { routes, __dirname }