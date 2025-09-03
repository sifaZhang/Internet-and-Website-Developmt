const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const mySound = new Audio("./collision.wav");

function Logo(event) {
    this.loading = true;
    this.image = new Image();
    this.image.src = "./DVD-logo.png";
    this.image.onload = () => { this.loading = false;};
    this.scaledWidth = this.image.width / 4;
    this.scaledHeight = this.image.height / 4;

    if (event === null) {
        this.y = random(0, canvas.clientHeight - this.scaledHeight);
        this.x = random(0, canvas.clientWidth - this.scaledWidth);
    }
    else {
        this.x = event.clientX;
        this.y = event.clientY;
        if (event.clientX >= canvas.clientWidth - this.scaledWidth - 1) this.x = canvas.clientWidth - this.scaledWidth - 1;
        if (event.clientX <= 0) this.x = 0;
        if (event.clientY >= canvas.clientHeight - this.scaledHeight - 1) this.y = canvas.clientHeight - this.scaledHeight - 1;
        if (event.clientY <= 0) this.y = 0;
    }

    this.velocityX = 1;
    this.velocityY = 1;

    this.update =() => {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }

    this.draw = (context, collision) => {
        if(collision){
             context.fillStyle = "red";  // 背景色可以换成任意颜色
             context.fillRect(this.x, this.y, this.scaledWidth, this.scaledHeight);
            mySound.play();
        }

        context.drawImage(
            this.image,
            this.x,
            this.y,
            this.scaledWidth,
            this.scaledHeight
        );
    }
}

let logos = [];
canvas.addEventListener("click", (event) => {logos.push(new Logo(event));});

logos.push(new Logo(null, false));

run();

function run(){
    update();
    draw()
    window.requestAnimationFrame(run);
}

function checkLogoCollision(index)
{
    for (let j = 0; j < logos.length; j++) {
        if (index >= 0 && index < logos.length && index !== j) {
            if (logos[index].x > logos[j].x + logos[j].scaledWidth
                || logos[j].x > logos[index].x + logos[index].scaledWidth
                || logos[j].y > logos[index].y + logos[index].scaledHeight
                || logos[index].y > logos[j].y + logos[j].scaledHeight
            ) {
                //
            }
            else {
                return true;
            }
        }
    }

    return false;
}

function update() {
    for (let i = 0; i < logos.length; i++) {
        logos[i].update();
        checkWallCollision(logos[i]);
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    for (let i = 0; i < logos.length; i++) {
        if (!logos[i].loading) {
            logos[i].draw(ctx, checkLogoCollision(i));
        }
    }
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function checkWallCollision(object){
    if(object.x + object.scaledWidth >= canvas.clientWidth){
        object.velocityX = -object.velocityX;
    }else if (object.x <= 0){
        object.velocityX = -object.velocityX;
    }

    if(object.y + object.scaledHeight >= canvas.clientHeight){
        object.velocityY = -object.velocityY;
    }else if (object.y <= 0){
        object.velocityY = -object.velocityY;
    }
}

