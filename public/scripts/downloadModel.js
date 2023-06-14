import { STATUS } from "./loadMobileNetFeatureModel.js";

export async function downloadModel(model){
    if(model === undefined){
        console.log("model undefined")
    }else{
        await model.save('http://localhost:3000/upload')
       
        console.log('!!MODEL DOWNLOADED!!')
        STATUS.innerText = '!!MODEL DOWNLOADED!!'
    }
}

