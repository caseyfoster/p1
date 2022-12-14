//getting item
let caseyName = document.getElementById('casey');

//function to change size
let changeText = function() {
    caseyName.innerHTML = "Hovered";
}

let changeBack = function() {
    caseyName.innerHTML = "Unhovered"
}

caseyName.addEventListener('mouseover', changeText);
caseyName.addEventListener('mouseout', changeBack)