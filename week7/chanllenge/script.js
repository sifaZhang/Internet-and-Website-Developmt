document.addEventListener("DOMContentLoaded", function() {
    let txt = "";
    txt += "<button onclick=\"clickBtn1()\">1</button>";
    txt += "<button onclick=\"clickBtn2()\">2</button>";
    txt += "<button onclick=\"clickBtn3()\">3</button>";

    let myCanvas = document.getElementById("MyCanvas");
    myCanvas.innerHTML = txt;
});

function clickBtn1() {
    alert("1");
}

function clickBtn2() {
    alert("2");
}

function clickBtn3() {
    alert("3");
}

