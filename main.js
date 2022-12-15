//getting item
// let hoverMe = document.getElementById('hover-me');


//function to change size
// let changeText = function() {
//     caseyName.innerHTML = "Hovered";
// }

let opacity = document.getElementById('opacity');
let hoverText = document.getElementById('hover-me');
let image = document.getElementById('img');

let changeImage = function() {
    image.style.opacity = "30%";
    opacity.innerHTML = "30% Opacity";
    hoverText.style.backgroundColor = 'darkgray';
    hoverText.style.color = 'white';
}

let changeImageBack = function() {
    image.style.opacity = "100%";
    opacity.innerHTML = "100% Opacity";
    hoverText.style.backgroundColor = '';
    hoverText.style.color = '';
}

// caseyName.addEventListener('mouseover', changeText);
// caseyName.addEventListener('mouseout', changeBack);
hoverText.addEventListener('mouseover', changeImage);
hoverText.addEventListener('mouseout', changeImageBack)

