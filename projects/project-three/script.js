//recognizing ids
const conditionContainer = document.getElementById("conditionContainer");
const square = document.getElementById("square");


//functions (mouseover and mouseout to rotate and change colour)
conditionContainer.addEventListener("mouseover", function () {
    console.log("hovering over condition container");
    square.classList.add('rotate'); // add() to add a class
    square.style.backgroundColor = "red";
});

conditionContainer.addEventListener("mouseout", function () {
    square.classList.remove('rotate'); // remove() to remove a class
    square.style.backgroundColor = "black";
});

