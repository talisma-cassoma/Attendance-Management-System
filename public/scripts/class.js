import html from "./html.js";
import gatherDataForClass from "./gatherDataForClass.js";
import {CLASS_NAMES } from "./loadMobileNetFeatureModel.js";




const buttonAddClass = document.querySelector('button.add-class')
const classes = document.querySelector('section.block3')

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
            classObject.innerHTML = html(newClassName, CLASS_NAMES.length)
            classObject.classList.add('classObject')
            //
            const dataCollectorButton = classObject.childNodes[3].childNodes[3]
            //add envent to icon
            dataCollectorButton.addEventListener("mousedown", gatherDataForClass);
            dataCollectorButton.addEventListener("mouseup", gatherDataForClass);
            // Populate the human readable names for classes.
            classes.appendChild(classObject)
            CLASS_NAMES.push(dataCollectorButton.getAttribute("data-name"));

        }
    }
}




export { Class, CLASS_NAMES }