document.addEventListener("DOMContentLoaded", function()  {
    doFace();
    doEyes(0,0);
    doMouth(0);
});

var xp = 15;
var yp = 15;
var xp_add = 3;
var yp_add = 1;
let mycanvas = document.getElementById("testCanvas")
let cntx = mycanvas.getContext('2d');

function moveEyes() {
    xp += xp_add;
    yp += yp_add;
    if (xp > 20 || xp < 0) xp_add = -xp_add;
    if (yp > 20 || yp < 0) yp_add = -yp_add;
    xp += xp_add;
    yp += yp_add;
    doFace();
    doEyes(xp, yp);
    doMouth(xp>0);
}

    //draw red semi-circle
function doMouth(up){
    cntx.beginPath();
    if (up) {
        cntx.arc(250, 310, 20, 0, Math.PI, true);
    }
    else {
        cntx.arc(250, 310, 20, Math.PI, 0, true);
    }

    cntx.closePath();
    cntx.lineWidth="10";
    cntx.strokeStyle="red";
    cntx.stroke();
}

function doFace() {
    //draw rectangle
    cntx.fillStyle = 'rgb(200,200,200)';
    cntx.fillRect(50, 50, 400, 400);
    //draw circle
    cntx.beginPath();
    cntx.arc(250, 250, 100, 0, Math.PI * 2, true);
    cntx.fillStyle = 'rgb(255,154,145)';
    cntx.fill();
    cntx.closePath();
    cntx.lineWidth = "4";
    cntx.strokeStyle = "black";
    cntx.stroke();
}


function doEyes(xp, yp)
{
    //draw 2 black circles
    cntx.beginPath();
    cntx.arc(220, 240, 40, 0, Math.PI * 2, true);
    cntx.closePath();
    cntx.lineWidth = "5";
    cntx.strokeStyle = "black";
    cntx.stroke();
    cntx.fillStyle = 'rgb(255,255,255)';
    cntx.fill();

    cntx.beginPath();
    cntx.arc(290, 240, 40, 0, Math.PI * 2, true);
    cntx.closePath();
    cntx.lineWidth = "5";
    cntx.strokeStyle = "black";
    cntx.stroke();
    cntx.fillStyle = 'rgb(255,255,255)';
    cntx.fill();

    // draw 2 blue circles
	cntx.beginPath();  
	//cntx.fillStyle='rgb(255,255,255)'; 
	cntx.arc(225 + xp, 240 +yp, 5, 30, Math.PI * 2, true);
	//cntx.fill();
	cntx.closePath();
	cntx.lineWidth="5";
	cntx.strokeStyle="blue";
	cntx.stroke();
	
	cntx.beginPath(); 
	cntx.arc(285 + xp, 240 + yp, 5, 30, Math.PI * 2, true);
	//cntx.fill();
	cntx.closePath();
	cntx.lineWidth="5";
	cntx.strokeStyle="blue";
	cntx.stroke();
}

setInterval(moveEyes, 200);