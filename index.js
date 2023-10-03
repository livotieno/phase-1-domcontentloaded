// Your code goes here
document.addEventListener("DOMContentLoaded", () => {
    changeText();
});

const changeText = () => {
    const p = document.querySelector("#text");
    p.textContent = "This is really cool!";
};