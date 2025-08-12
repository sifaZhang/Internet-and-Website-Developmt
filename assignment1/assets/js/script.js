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
    taskProgress.value = pageNumber / totalPages * 100; // Assuming there are 4 pages, adjust as necessary
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
