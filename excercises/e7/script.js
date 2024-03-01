
//make background white
$('body').css('background-color', 'white');


let text = 'Hello';

$('.background').hide();


// make the div blocks repeat
//use `` instead of ''
for (let i = 0; i < 500; i++) {
    let block = `<div style="width:${i}px; height: 100vw; background-color: hsl(${i}, 100%, 50%)"></div>`;
    $('.foreground').append(block);
}



// 'mousenter' can be other interactions
//, funtion to make function
//(this) to select the item
//.addClass('no-width') to add css class

$('div').each(function () {

    $(this).on('mouseenter', function () {
        $(this).addClass('no-width');
    })






})

//add key pess function
$('body').on('keypress', function () {
    console.log('keypress!')
    $('div').removeClass('no-width') //resetting no-width
})



$('div').each(function () {

    $(this).on('keydown', function () {
        $(this).addClass('blue-body');
    })



})
