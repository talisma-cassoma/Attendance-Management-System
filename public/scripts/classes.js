import html from "./html.js";

let dataCollectorButtons = document.querySelectorAll(".dataCollector") || [];
let positionNumber = dataCollectorButtons.length

const buttonAddClass = document.querySelector('button.add-class')
const classes = document.querySelector('section.block3')

const Class = {

    add(){
           
        let newClassName = prompt("Please enter a name:", "");
        if (newClassName == null || newClassName == "") {
            alert("no class added")
        } else {
            const classObject = document.createElement('article')
            classObject.innerHTML = html(newClassName, positionNumber)
            classObject.classList.add('classObject')
            classes.appendChild(classObject)
            positionNumber++

        }
    }
} 

buttonAddClass.addEventListener('click', Class.add)


export { dataCollectorButtons }