

//for text
$(".click").addClass("selected");


$("h1").on("click", function () {
    $("h1").fadeOut("slow");
});

$("h1").on("mousein", function () {
    $("h1").fadein("slow");
});


//for circle event
$("#right").on("click", function () {
    $(".block").animate({ "left": "+=50px" }, "slow");

});

$("#left").on("click", function () {
    $(".block").animate({ "left": "-=50px" }, "slow");
});


//make background white
$('body').css('background-color', 'rgb(38, 114, 237)');

$(document).ready(function () {
    setInterval(function () {
        $(".ocean").animate({ top: "-=10px" }, 500).animate({ top: "+=10px" }, 500);
    }, 1000); // Change interval time according to your needs
});
