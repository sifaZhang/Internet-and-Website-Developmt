function adReplay() {
    let ad = document.getElementById("scene2");
    let copy = ad.cloneNode(true);
    ad.replaceWith(copy);
}

$(document).ready(function () {
    $('h1').text('jQuery is working!');
});