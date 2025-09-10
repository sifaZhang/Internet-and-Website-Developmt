const canvas = document.getElementById("myCanvas");
const cntx = canvas.getContext("2d");



cntx.beginPath();
cntx.arc(300, 300, 290, 0, 2 * Math.PI, false);
cntx.lineWidth = "10";
cntx.fillStyle = "black";
cntx.fill();
cntx.closePath();
cntx.stroke();

cntx.beginPath();
cntx.lineWidth = "10";
cntx.strokeStyle = "red";
//cntx.fillStyle = "#FFFFFF";
cntx.strokeRect(100, 100, 400, 400);
cntx.closePath();

cntx.beginPath();
cntx.font = "80px Arial";         // 设置字体和大小
cntx.fillStyle = "white"; // 或其他对比色
cntx.fillText("Challenge", 120, 320); // 在指定位置写字
cntx.closePath();

