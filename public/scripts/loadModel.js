import { Camera } from "./camera.js"
import { mobilenet, loadMobileNetFeatureModel } from "./loadMobileNetFeatureModel.js";
import { Class, predictionBarsProgress } from "./class.js";

const predictionContainer = document.querySelector('.predictions')

let model = undefined

const Prediction = {

	getModelLabelsNames() {
		const classNames = ["Talisma", "Boteil_rouge", "nothing", "telphone"]
		return classNames
	},
	setPredictionsBars() {
		const labels = Prediction.getModelLabelsNames()
		for (let i = 0; i < labels.length; i++) {
			Class.createLabelPredictionsBar(labels[i])
		}
	},
	enable() {

		const predBtn = document.querySelector('.enablePredictionButton')

		predBtn.addEventListener('click', function predictLoop() {
			if (Camera.videoPlaying) {

				tf.tidy(function predictLoop() {
					let videoFrameAsTensor = tf.browser.fromPixels(Camera.VIDEO).div(255);
					let resizedTensorFrame = tf.image.resizeBilinear(videoFrameAsTensor, [Camera.MOBILE_NET_INPUT_HEIGHT,
					Camera.MOBILE_NET_INPUT_WIDTH], true);

					let imageFeatures = mobilenet.predict(resizedTensorFrame.expandDims());
					let predict = model.predict(imageFeatures).squeeze();

					let predictionArray = predict.arraySync();

					const labels = Prediction.getModelLabelsNames()


					for (let i = 0; i < labels.length; i++) {

						let classPredictionConfidence = Math.floor(predictionArray[i] * 100) 
						predictionBarsProgress[i].style.width = `${classPredictionConfidence}%` 
						predictionBarsProgress[i].innerText = classPredictionConfidence + '%'
					}
				});

				window.requestAnimationFrame(predictLoop);

			} else {
				console.log("camera is off")
			}
		})
	},
	async loadModel() {

		model = await tf.loadLayersModel('http://localhost:3000/assets/uploads/model.json');

		model.summary()

		loadMobileNetFeatureModel()

		Prediction.setPredictionsBars()
	}
}

const App = {
	init() {
		Camera.init()
		Prediction.loadModel();
		Prediction.enable()
	}
}

App.init()









