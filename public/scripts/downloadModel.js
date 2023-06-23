import { STATUS } from "./loadMobileNetFeatureModel.js";
import { CLASS_NAMES } from "./class.js"

export async function downloadModel(model){
    if(model === undefined){
        console.log("model undefined")
    }else{
        //save labels on model
       // model.config = {labels: CLASS_NAMES};
        await model.save('http://localhost:3000/upload')

        const data = {labels: CLASS_NAMES};
        let response = await fetch('http://localhost:3000/train/labels', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
          });
          
          let result = await response.json();
          console.log(result);
       
        console.log('!!MODEL DOWNLOADED!!')
        STATUS.innerText = '!! MODEL DOWNLOADED !!'
    }
}
