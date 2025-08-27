window.addEventListener("DOMContentLoaded", function () {
    clickStart();

    document.getElementById('replay').addEventListener('click', function (event) {
        event.stopPropagation(); // 阻止冒泡
        clickStart(); // 重新播放动画
    });
});

//side ad
function animate()
{
    const sidebarScene1 = document.getElementById('sidebarScene1');
    const sidebarScene2 = document.getElementById('sidebarScene2');
    const sidebarScene3 = document.getElementById('sidebarScene3');

    sidebarScene1.classList.remove('hidden');
    sidebarScene2.classList.add('hidden');
    sidebarScene3.classList.add('hidden');

    const sidebarScene3Text9 = document.getElementById('sidebarScene3Text9');
    const sidebarScene3Text10 = document.getElementById('sidebarScene3Text10');
    const sidebarScene3img1 = document.getElementById('sidebarScene3img1');
    const sidebarScene3img2 = document.getElementById('sidebarScene3img2');
    const replay = document.getElementById('replay');

    sidebarScene3img1.classList.remove('hidden');
    sidebarScene3img2.classList.add('hidden');
    sidebarScene3Text9.classList.add('hidden');
    sidebarScene3Text10.classList.add('hidden');
    replay.classList.add('hidden');

    let phase = 1;
    let second = 0;
    let animId;

    function doAnimate() {
        //add second
        second++;
        
        if( phase == 1){
            if(second >= 3) {
                phase = 2;
                sidebarScene1.classList.add('hidden');
                sidebarScene2.classList.remove('hidden');
            }
        }
        else if (phase == 2) {
          if(second >= 6) {
                phase = 3;
                sidebarScene2.classList.add('hidden');
                sidebarScene3.classList.remove('hidden');
                replay.classList.add('hidden');
            }
        } else if (phase == 3) {
            if(second < 9) {
                sidebarScene3img1.classList.remove('hidden');
                sidebarScene3img2.classList.add('hidden');
                sidebarScene3Text9.classList.add('hidden');
                sidebarScene3Text10.classList.add('hidden');
                replay.classList.add('hidden');
            } else if (second < 12) {
                sidebarScene3img1.classList.add('hidden');
                sidebarScene3Text10.classList.add('hidden');
                replay.classList.add('hidden');
                sidebarScene3img2.classList.remove('hidden');
                sidebarScene3Text9.classList.remove('hidden');
            }
            else {
                phase = 4;
            }
        } 
        else {
            sidebarScene3Text10.classList.remove('hidden');
            replay.classList.remove('hidden');
            clearInterval(animId);
        }
    }

    animId = setInterval(doAnimate, 1000);
}


function clickStart() {
    document.getElementById('replay').classList.add('hidden');
    animate();
}


//banner ad
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

let totalPages = 4; // Assuming there are 4 pages
function nextPage(pageNumber) {
    const currentPage = document.getElementById('page' + pageNumber);

    // 获取当前页内所有输入控件
    const inputs = currentPage.querySelectorAll('input, select, textarea');

    let allValid = true;
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.reportValidity(); // 显示提示信息
            allValid = false;
        }
    });

    if (!allValid) {
        return; // 阻止翻页
    }

    currentPage.classList.add('hidden');

    const nextPage = document.getElementById('page' + (pageNumber + 1));
    nextPage.classList.remove('hidden');

    const taskProgress = document.getElementById('taskProgress');
    taskProgress.value = (pageNumber + 1) / totalPages * 100; // Assuming there are 4 pages, adjust as necessary
}

function previousPage(pageNumber) {
    const currentPage = document.getElementById('page' + pageNumber);
    currentPage.classList.add('hidden');
    const nextPage = document.getElementById('page' + (pageNumber - 1));
    nextPage.classList.remove('hidden');

    const taskProgress = document.getElementById('taskProgress');
    taskProgress.value = (pageNumber - 1) / totalPages * 100; // Assuming there are 4 pages, adjust as necessary
}

document.getElementById("ticketForm").addEventListener("submit", function(event) {
  event.preventDefault(); // 阻止默认提交行为

  const page4 = document.getElementById('page4');
  page4.classList.add('hidden'); // 隐藏第4页

  const taskProgress = document.getElementById('taskProgressDiv');
  taskProgress.classList.add('hidden'); // 隐藏第4页

  const form = event.target;
  const formData = new FormData(form);

  document.getElementById("ticketDateContent").innerText = formData.get("ticketDate");
  document.getElementById("adultsContent").innerText = formData.get("adults");
  document.getElementById("childrenContent").innerText = formData.get("children");
  document.getElementById("contactNameContent").innerText = formData.get("contactName");
  document.getElementById("emailContent").innerText = formData.get("email");
  document.getElementById("ticketTypeContent").innerText = formData.get("ticketType");
  document.getElementById("lockerContent").innerText = formData.get("locker") === "on" ? "Yes" : "No";

  const summaryBooking = document.getElementById('summaryBooking');
  summaryBooking.classList.remove('hidden'); // 显示总结页面
  summaryBooking.style.display = 'flex';
});

function clickBanner() {
    window.open("https://jschollitt.github.io/TeWaioTane/index.html", "_blank");
}

function clickSidebar() {
    window.open("https://www.ea.govt.nz/", "_blank");
}

function openWireFrame() {
    window.open("../assets/wireFrame/wireFrame.pdf", "_blank");
}

function openSidebarStoryboard() {
    window.open("../assets/storyBoards/Storyboard task2.pdf", "_blank");
}

function openBannerStoryboard() {
    window.open("../assets/storyBoards/Storyboard task1.pdf", "_blank");
}