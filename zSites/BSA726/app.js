// JavaScript Document

var backgroundIMG = document.getElementById('landing');


var currentBackground = 0;

let listOfBackgrounds = ["url(./images/HDRI.jpg)","url(./images/furballFloating.png)","url(./images/SIT_Logo.png)"];

function moveBack(){
    
    currentBackground -= 1;
    if (currentBackground < 0){
        currentBackground = listOfBackgrounds.length -1;
    }
    backgroundIMG.style.backgroundImage = listOfBackgrounds[currentBackground];
    
    


console.log(currentBackground);

}

function moveForward(){

    currentBackground += 1;
    if (currentBackground > listOfBackgrounds.length -1 ){
        currentBackground = 0
    }

    backgroundIMG.style.backgroundImage = listOfBackgrounds[currentBackground];
    

console.log(currentBackground);

}