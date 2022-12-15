//getting item
let caseyName = document.getElementById('casey');

//function to change size
// let changeText = function() {
//     caseyName.innerHTML = "Hovered";
// }

let changeBack = function() {
    caseyName.innerHTML = "Unhovered"
}

let image = document.getElementById('img');

let changeImage = function() {
    image.style.opacity = "30%";
    caseyName.innerHTML = "30% Opacity";
}

let changeImageBack = function() {
    image.style.opacity = "100%";
    caseyName.innerHTML = "100% Opacity";
}

// caseyName.addEventListener('mouseover', changeText);
// caseyName.addEventListener('mouseout', changeBack);
image.addEventListener('mouseover', changeImage);
image.addEventListener('mouseout', changeImageBack)