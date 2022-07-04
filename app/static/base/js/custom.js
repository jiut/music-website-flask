$(document).ready(function () {
    $("#hover-trigger").hover(function () {
        $('nav').collapse('show');
    }, function () {
        $('nav').collapse('hide');
    });
});