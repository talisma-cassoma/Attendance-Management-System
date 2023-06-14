// const URL =
// 'https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v3_small_100_224/feature_vector/5/default/1';

// let model = await tf.loadGraphModel(URL, { fromTFHub: true });

export async function downloadModel(model){
    if(model === undefined){
        console.log("model undefined")
    }else{
        await model.save('http://localhost:3000/upload')
    }
}

// const DOWNLOAD_BUTTON = document.getElementById('download');

// DOWNLOAD_BUTTON.addEventListener('click', downloadModel);