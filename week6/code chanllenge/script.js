document.addEventListener("DOMContentLoaded", function () {
    animate();
});

function animate() {
    let div = document.getElementById("div1");

    if (!div.style.left) {
        div.style.left = "0px";
    }

    function doAnimate() {
        let currentLeft = parseInt(div.style.left, 10);
        div.style.left = (currentLeft + 1) + "px";
    }

    animId = setInterval(doAnimate, 100);
}
