window.addEventListener("DOMContentLoaded", function() {
    // perform on-load actions here
});

const scene2 = document.getElementById('adScene2');
const bannerScene1Text3 = document.getElementById('bannerScene1Text3');
bannerScene1Text3.addEventListener('animationend', () => {
    scene2.classList.remove('hidden');
});

const s2t1 = document.getElementById('bannerScene2Text1');
const s2t2 = document.getElementById('bannerScene2Text2');
const s2t3 = document.getElementById('bannerScene2Text3');
const s2t4 = document.getElementById('bannerScene2Text4');
s2t4.addEventListener('animationstart', () => {
    s2t1.classList.add('hidden');
    s2t2.classList.add('hidden');
    s2t3.classList.add('hidden');
});