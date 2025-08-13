document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("animWrapper").addEventListener("click", animate);
});


function animate()
{
    const animBlock = document.getElementById('animBlock');
    const animBlock2 = document.getElementById('animBlock2');

        // ✅ Reset styles
    animBlock.style.opacity = '1';
    animBlock2.style.opacity = '0.5';
    animBlock.style.left = '0px';
    animBlock.style.top = '0px';
    animBlock2.style.left = '770px';
    animBlock2.style.top = '0px';


    let x = 0;
    let y = 0;
    let x2 = 770;
    let y2 = 0;
    let opacity = 1;
    let opacity2 = 0.5;
    let phase = 0;
    let animId;

    function doAnimate() {
        if( phase == 0){
            x += 1;
            y += 1;
            animBlock.style.left = x + 'px';
            animBlock.style.top = y + 'px';

            x2 -= 1;
            y2 += 1
            animBlock2.style.left = x2 + 'px';
            animBlock2.style.top = y2 + 'px';

            if (x >= 300) {
                phase = 1; // Move to next phase
            }
        }
        else if (phase == 1) {
           x -= 1;
           animBlock.style.left = x + 'px';

           x2 += 1;
           animBlock2.style.left = x2 + 'px';

           if(x <= 20)
           {
            phase = 2; // Move to next phase
           }
        } else if (phase == 2) {
            x += 1;
            y += 0.5;
            animBlock.style.left = x + 'px';
            animBlock.style.top = y + 'px';

            x2 -= 1;
            y2 += 0.5;
            animBlock2.style.left = x2 + 'px';
            animBlock2.style.top = y2 + 'px';

            if( x >= 550){
                phase = 3; // Move to next phase
            }
        } else if (phase == 3) {
            opacity -= 0.01;
            animBlock.style.opacity = opacity;

            opacity2 += 0.005;
            animBlock2.style.opacity = opacity2;

            if( opacity <= 0){
                phase = 4; // Move to next phase
            }
        }
        else {
            clearInterval(animId);
            document.getElementById("startAnim").classList.remove('hidden');
        }
    }

    animId = setInterval(doAnimate, 10);
}


function clickStart() {
    document.getElementById("startAnim").classList.add('hidden');
    animate();
}
