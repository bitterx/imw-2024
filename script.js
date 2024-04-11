//referencing a previous coding project i did (Shaheer gave me this code) 
// heres the website if you want to check it out https://bitterx.github.io/brewing-tea-2/


//shows a new image and an alternative one when hovered over
window.onload = function () {
    $('.main-image').mouseover(newImage);
    $('.main-image').mouseout(switchBackImage);
}

function newImage() {
    let newSrc = $(this).attr('data-alt');
    $(this).attr('src', newSrc);
}

function switchBackImage() {
    let ogSrc = $(this).attr('data-og');
    $(this).attr('src', ogSrc);
}

