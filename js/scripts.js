$(document).ready(function () {
    $("h1").click(function () {
        alert("This is a header.");
    });
    $(document).ready(function () {
        $("p").click(function() {
        $(".walrus-showing").toggle();
        $(".walrus-hidden").toggle();
        });
    });
    $("img").click(function () {
        alert("This is an image.");
    });
});