// Settings
const body = document.querySelector('body')
const lightMode = document.getElementById('lightMode');
const darkMode = document.getElementById('darkMode');
const neuMode = document.getElementById('neuMode');
const glassMode = document.getElementById('glassMode');
lightMode.addEventListener('click', () => {
    lightMode.classList.add('active');
    darkMode.classList.remove('active');
    body.classList.add('light');
    body.classList.remove('dark');
});
darkMode.addEventListener('click', () => {
    lightMode.classList.remove('active');
    darkMode.classList.add('active');
    body.classList.remove('light');
    body.classList.add('dark');
});
neuMode.addEventListener('click', () => {
    neuMode.classList.add('active');
    glassMode.classList.remove('active');
    body.classList.add('neumorphism');
    body.classList.remove('glassmorphism');
});
glassMode.addEventListener('click', () => {
    neuMode.classList.remove('active');
    glassMode.classList.add('active');
    body.classList.remove('neumorphism');
    body.classList.add('glassmorphism');
});
// Tic-tac-toe logic
let allAvailable = document.querySelectorAll('.available');
allAvailable.forEach((myCell) => {
    myCell.addEventListener('click', () => {
        if (myCell.classList.contains('available')) {
            myCell.classList.remove('available')
            myCell.innerHTML = `<svg class="my" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/></svg>`;
            allAvailable = document.querySelectorAll('.available');
            if (allAvailable.length > 1) {
                makeMove();
            }
        }
    });
});
function makeMove() {
    let tryID = getRandomInt(1, 10);
    let selectedBySystem = document.getElementById(`${tryID}`);
    if (selectedBySystem.classList.contains('available')) {
        setTimeout(() => {
            selectedBySystem.classList.remove('available');
            allAvailable = document.querySelectorAll('.available');
            selectedBySystem.innerHTML = `<svg class="system" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg>`;
        }, 500)
    }
    else {
        makeMove();
    }
}
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}