$(document).ready(function () {

    $("#popup").fadeIn(800).delay(2500).fadeOut(800);

    $(window).scroll(function () {
        $(".sidebar").css("top", $(window).scrollTop());
    });

});
