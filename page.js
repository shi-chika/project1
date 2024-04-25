const hamBtn = document.querySelector(".hamburger-btn");
hamBtn.addEventListener('click', ()=>{
    const top = document.querySelector(".top");
    const middle = document.querySelector(".middle");
    const down = document.querySelector(".down");

    const hamList = document.querySelector(".ham-list")
    const hamBg = document.querySelector(".hamburger-bg")

    top.classList.toggle('bar-top');
    middle.classList.toggle('bar-middle');
    down.classList.toggle('bar-down');

    hamList.classList.toggle('show-list');
    hamBg.classList.toggle('show-bg');
});

