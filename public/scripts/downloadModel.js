import { STATUS } from "./loadMobileNetFeatureModel.js";
import { CLASS_NAMES } from "./class.js"

export async function downloadModel(model){
    if(model === undefined){
        console.log("model undefined")
    }else{
        //save labels on model
        model.config = {labels: CLASS_NAMES};
        await model.save('http://localhost:3000/upload')
       
        console.log('!!MODEL DOWNLOADED!!')
        STATUS.innerText = '!! MODEL DOWNLOADED !!'
    }
}

