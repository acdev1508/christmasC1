const noBtn = document.querySelector("#no");
const yesBtn = document.querySelector("#yes");
let boxheart = document.querySelector(".boxheart");
let boxchoose = document.querySelector(".boxchoose");
let popup = document.querySelector(".popup");

boxheart.addEventListener("click", function () {
    boxheart.classList.add("active");
    boxchoose.classList.add("active");
});

yesBtn.addEventListener("click", function () {
    popup.classList.add("active");
});

noBtn.addEventListener("mouseenter", () => {
    const top = Math.floor(Math.random() * window.innerHeight);
    const left = Math.floor(Math.random() * window.innerWidth);

    noBtn.style.top = `${top}px`;
    noBtn.style.left = `${left}px`;
});

noBtn.addEventListener('click', () => {
    noBtn.classList.add('shake');
});

const heart = document.querySelector('.heart');
heart.addEventListener('animationiteration', () => {
    heart.classList.toggle('flash');
});