
$( document ).ready(function() {


    
$("#mainBut").click(function() {
    $('html,body').animate({
        scrollTop: $("#topNav").offset().top},
        'slow');
});

$("#contact").click(function() {
    $('html,body').animate({
        scrollTop: $("#contactPage").offset().top},
        'slow');
});



});