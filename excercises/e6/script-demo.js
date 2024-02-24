
// interaction
const greenCircle = document.getElementById("green");
const pinkCircle = document.getElementById("plum");
const blueCircle = document.getElementById("blue");


let interactionContainer = document.getElementById("interactionContainer");


greenCircle.addEventListener("click", function () {
    console.log(interactionContainer)
    interactionContainer.style.backgroundColor = "lightgreen";
})

pinkCircle.addEventListener("click", function () {
    interactionContainer.style.backgroundColor = "plum";
})

blueCircle.addEventListener("click", function () {
    interactionContainer.style.backgroundColor = "lightblue";
})

// loop
const loopContainer = document.getElementById("loopContainer");
const message = "brave";

for (let i = 0; i < 10; i++) {
    console.log("brave");
    const textDiv = document.createElement("div");
    textDiv.innerHTML = message;
    loopContainer.appendChild(textDiv);
}

//time (referenced chatgpt)
const increaseText = document.getElementById('increaseText');
let fontSize = 16; // Initial font size

// Function to increase font size
function increaseFontSize() {
    fontSize += 1; // Increment font size
    increaseText.style.fontSize = fontSize + 'px'; // Set new font size
}

// Call increaseFontSize function every second
setInterval(increaseFontSize, 1000);



//condition (referenced chatgpt)
const conditionContainer = document.getElementById("conditionContainer");
const square = document.getElementById("square");


conditionContainer.addEventListener("mouseover", function () {
    console.log("hovering over condition container")
    square.style.backgroundColor = "green";
});

conditionContainer.addEventListener("mouseout", function () {
    // console.log("hovering over condition container")
    square.style.backgroundColor = "lightsalmon";
});

//input
const inputText = document.getElementById('inputText');
const textLength = document.getElementById('text-length');

// Add event listener to input field
inputText.addEventListener('input', function () {
    // Update character count
    textLength.textContent = inputText.value.length;
});

//console
console.log("i dont know what to type in haha");

