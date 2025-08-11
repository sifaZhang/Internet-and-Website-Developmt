window.addEventListener("DOMContentLoaded", function() {
    // perform on-load actions here
});

const scene1 = document.getElementById('adScene1');
const scene2 = document.getElementById('adScene2');
const bannerScene1Text3 = document.getElementById('bannerScene1Text3');
bannerScene1Text3.addEventListener('animationend', () => {
    scene1.classList.add('hidden');
    scene2.classList.remove('hidden');
});
