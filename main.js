//getting item
let caseyName = document.getElementById('casey');

//function to change size
let changeText = function() {
    caseyName.innerHTML = "Hovered";
}

let changeBack = function() {
    caseyName.innerHTML = "Unhovered"
}

let image = document.getElementById('img');

let changeImage = function() {
    image.style.opacity = "30%";
}

caseyName.addEventListener('mouseover', changeText);
caseyName.addEventListener('mouseout', changeBack);
image.addEventListener('click', changeImage);