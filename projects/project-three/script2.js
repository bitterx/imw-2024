//circles

// Select the elements
const container = document.querySelector('.container');
const circle = document.querySelector('.circle');

const hiddenCircle = document.querySelector('.hidden-circle');
const hiddenCircleCopy = document.querySelector('.hidden-circleCopy');

const hiddenCircle2 = document.querySelector('.hidden-circle2');
const hiddenCircle2Copy = document.querySelector('.hidden-circle2Copy');
const hiddenCircle2Copy2 = document.querySelector('.hidden-circle2Copy2');


const hiddenCircle3 = document.querySelector('.hidden-circle3');
const hiddenCircle3Copy = document.querySelector('.hidden-circle3Copy');


const hiddenCircle4 = document.querySelector('.hidden-circle4');
const hiddenCircle4Copy = document.querySelector('.hidden-circle4Copy');



// Add event listener to the container
container.addEventListener('mouseenter', function () {
    hiddenCircle.style.display = 'block';
    hiddenCircleCopy.style.display = 'block';
});


//hover over circle and circle 2 and other copies will show and stay
hiddenCircle.addEventListener('mouseenter', function () {
    hiddenCircle2.style.display = 'block';
    hiddenCircle2Copy.style.display = 'block';
    hiddenCircle2Copy2.style.display = 'block';

});


//hover over circle 2 and circle 3 will show and stay

hiddenCircle2.addEventListener('mouseenter', function () {
    hiddenCircle3.style.display = 'block';
    hiddenCircle3Copy.style.display = 'block';


});

hiddenCircle3.addEventListener('mouseenter', function () {
    hiddenCircle4.style.display = 'block';
    hiddenCircle4Copy.style.display = 'block';

});




// Change background color to blue after clicking the fourth circle
hiddenCircle4.addEventListener('click', function () {
    document.body.style.backgroundColor = '#287DFC';
    hiddenCircle4.style.backgroundColor = 'white';
    hiddenCircle4.style.display = 'block'; // Ensure hiddenCircle4 stays visible
});

