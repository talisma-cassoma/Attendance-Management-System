export async function downloadModel(model){
    await model.save('downloads://my-model');
}