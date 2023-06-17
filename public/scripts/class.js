import { innerHtml } from "./html.js";
import gatherDataForClass from "./gatherDataForClass.js";
import { CLASS_NAMES } from "./loadMobileNetFeatureModel.js";




const buttonAddClass = document.querySelector('button.add-class')
const classes = document.querySelector('section.block3')
const predictionContainer = document.querySelector('.predictions')
const predictionBarsProgress = []
const numberOfImagesCollected = []


function getRandomColor() {
    var letters = 'AFBEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

const Class = {
    init() {
        buttonAddClass.addEventListener('click', Class.add)
    },
    add() {

        let newClassName = prompt("Please enter a name:", "");
        if (newClassName == null || newClassName == "") {
            alert("no class added")
        } else {
            //create a html element
            const classObject = document.createElement('article')
            classObject.innerHTML = innerHtml.classBox(newClassName, CLASS_NAMES.length)
            classObject.classList.add('classObject')
            classes.appendChild(classObject)

            //get div.icon.dataCollector on html
            let dataCollectorButton = classObject.children[1].children[1].children[0]
            dataCollectorButton.addEventListener("mousedown", gatherDataForClass);
            dataCollectorButton.addEventListener("mouseup", gatherDataForClass);
            // Populate the human readable names for classes.
            CLASS_NAMES.push(dataCollectorButton.getAttribute("data-name"));

            //array of nbrs of images colleccted div a each class div  
            numberOfImagesCollected.push(classObject.children[1].children[1].children[1])

            ////create a progress element
            const predictionBar = document.createElement('div')
            //fill html
            predictionBar.innerHTML = innerHtml.progressBar(newClassName)
            predictionBar.classList.add('progressBarContainer')
            //save it in html page
            predictionContainer.appendChild(predictionBar)

            const progress = predictionBar.children[1].children[0]
            progress.style.backgroundColor = getRandomColor()
            predictionBarsProgress.push(progress)
            //get div.numberOfImagesCollected in html
        }
    }
}




export { Class, CLASS_NAMES, predictionBarsProgress}