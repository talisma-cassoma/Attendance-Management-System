import { Class, CLASS_NAMES } from "./class.js"
import { Camera } from "./camera.js"
import gatherDataForClass from "./gatherDataForClass.js";

/**
 * Loads the MobileNet model and warms it up so ready for use.
 **/
let mobilenet = undefined
const STATUS = document.getElementById("status");
const MOBILE_NET_INPUT_WIDTH = 224;
const MOBILE_NET_INPUT_HEIGHT = 224; 

async function loadMobileNetFeatureModel() {
	const URL = 
	  'https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v3_small_100_224/feature_vector/5/default/1';
	
	mobilenet = await tf.loadGraphModel(URL, {fromTFHub: true});
	STATUS.innerText = 'MobileNet v3 loaded successfully!';
	
	// Warm up the model by passing zeros through it once.
	tf.tidy(function () {
	  let answer = mobilenet.predict(tf.zeros([1, MOBILE_NET_INPUT_HEIGHT, MOBILE_NET_INPUT_WIDTH, 3]));
	  console.log(answer.shape);
	});
  }


const Train = {

	enableGatherDataForClass() {
		
		//- define nn model
		//- enable add classes  
	},
	trainAndPredict() {
	
	},
	reset() {
	  // TODO: Fill this out later in the codelab!
	}
	
}


const App = {
	init(){
		Camera.init() 
		// Call the function immediately to start loading.
		loadMobileNetFeatureModel();
		Class.init()
		// enable gatherDataForClass
		/*
		- Train.enableGatherDataForClass()
		- add eventListenner onclick to train button
		- add eventListenner onclick to reset button
		
		*/
	}
}

App.init()