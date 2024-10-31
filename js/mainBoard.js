import { Board } from './Board.js';
import { View } from './View.js';
import { Car } from './Car.js';


// main
const container = document.getElementById('rush-hour');

export function printTopScores() {
    let usersScores = JSON.parse(localStorage.getItem('usersScores'));
    if (usersScores === null || usersScores.length === 0) {
        console.log("No users registered at the moment.");
        return;
    }

    usersScores.sort((a, b) => b.score - a.score);

    // Finding the elements in the HTML
    let firstPlace = document.getElementById('one');
    let secondPlace = document.getElementById('second');
    let thirdPlace = document.getElementById('three');

    // The fullness of the elements in the results
    if (usersScores[0]) {
        firstPlace.innerText = `🥇 Username: ${usersScores[0].username}, Score: ${usersScores[0].score}, Level: ${usersScores[0].level}`;
    } else {
        firstPlace.innerText = "-";
    }

    if (usersScores[1]) {
        secondPlace.innerText = `🥈 Username: ${usersScores[1].username}, Score: ${usersScores[1].score}, Level: ${usersScores[1].level}`;
    } else {
        secondPlace.innerText = "-";
    }

    if (usersScores[2]) {
        thirdPlace.innerText = `🥉 Username: ${usersScores[2].username}, Score: ${usersScores[2].score}, Level: ${usersScores[2].level}`;
    } else {
        thirdPlace.innerText = "-";
    }
}

// A function that prints the current step on the screen
export function printLevel() {
    let currentLevel = localStorage.getItem('usersLevel');
    if (currentLevel) {
        let levelDisplay = document.getElementById('currentLevelDisplay');
        if (levelDisplay) {
            levelDisplay.innerText = `Current Level: ${currentLevel}`;
        }
    }
}
// Custom Level 1
const customLevel1 = () => [
    new Car(2, "red", [2, 1], "right"),
    new Car(3, "yellow", [2, 2], "down"),
    new Car(3, "green", [4, 3], "down"),
    new Car(2, "orange", [5, 2], "right"),
    new Car(2, "purple", [5, 4], "right"),
    new Car(2, "blue", [3, 5], "down")
];

// Custom Level 2
const customLevel2 = () => [
    new Car(2, "red", [2, 1], "right"),
    new Car(3, "yellow", [1, 2], "right"),
    new Car(2, "green", [3, 4], "right"),
    new Car(3, "orange", [2, 3], "down"),
    new Car(2, "blue", [3, 2], "down"),
    new Car(3, "purple", [4, 2], "right"),
    new Car(2, "light-blue", [3, 5], "down"),
    new Car(2, "pink", [5, 5], "down")

];

// Custom Level 3
const customLevel3 = () => [
    new Car(2, "red", [2, 1], "right"),
    new Car(2, "yellow", [3, 1], "right"),
    new Car(2, "green", [3, 2], "down"),
    new Car(2, "orange", [3, 3], "down"),
    new Car(3, "blue", [3, 4], "down"),
    new Car(2, "purple", [3, 5], "down"),
    new Car(2, "light-blue", [5, 0], "down"),
    new Car(2, "pink", [5, 1], "down"),
    new Car(2, "black", [5, 2], "down"),
    new Car(2, "brown", [5, 3], "down"),
    new Car(2, "grey", [4, 5], "right")
    
];

// Custom Level 4
const customLevel4 = () => [
    new Car(2, "red", [2, 3], "right"),
    new Car(3, "yellow", [5, 1], "down"),
    new Car(3, "green", [2, 4], "down"),
    new Car(2, "orange", [2, 5], "down"),
    new Car(3, "blue", [5, 4], "right"),
    new Car(2, "purple", [4, 2], "down"),
    new Car(2, "light-blue", [4, 3], "down"),
    new Car(2, "pink", [3, 5], "right"),
    new Car(2, "brown", [5, 5], "down")
];

// Custom Level 5
const customLevel5 = () => [
    new Car(2, "red", [2, 1], "right"),
    new Car(3, "yellow", [0, 2], "right"),
    new Car(2, "green", [1, 1], "right"),
    new Car(2, "orange", [1, 3], "right"),
    new Car(3, "blue", [2, 4], "down"),
    new Car(2, "purple", [3, 2], "down"),
    new Car(2, "light-blue", [4, 1], "down"),
    new Car(2, "pink", [3, 5], "right"),
    new Car(2, "brown", [4, 5], "right"),
    new Car(3, "grey", [5, 5], "right")
];

// Custom Level 6
const customLevel6 = () => [
    new Car(2, "red", [2, 4], "right"),
    new Car(3, "yellow", [3, 0], "down"),
    new Car(3, "green", [0, 2], "right"),
    new Car(3, "orange", [2, 5], "down"),
    new Car(3, "blue", [3, 5], "right"),
    new Car(2, "purple", [1, 3], "down"),
    new Car(2, "light-blue", [1, 4], "down"),
    new Car(2, "pink", [5, 3], "down"),
    new Car(2, "brown", [5, 5], "right")
];

// Custom Level 7
const customLevel7 = () => [
    new Car(2, "red", [2, 1], "right"),
    new Car(3, "yellow", [0, 5], "right"),
    new Car(2, "green", [3, 2], "down"),
    new Car(2, "orange", [3, 3], "down"),
    new Car(2, "blue", [3, 4], "down"),
    new Car(2, "purple", [3, 5], "down"),
    new Car(2, "light-blue", [5, 0], "down"),
    new Car(2, "pink", [5, 5], "down"),
    new Car(2, "brown", [4, 2], "right"),
    new Car(2, "grey", [4, 4], "right"),
    new Car(3, "black", [5, 3], "right")
];

// Custom Level 8
const customLevel8 = () => [
    new Car(2, "red", [2, 1], "right"),
    new Car(2, "yellow", [1, 0], "down"),
    new Car(3, "green", [2, 2], "down"),
    new Car(2, "orange", [0, 5], "right"),
    new Car(2, "blue", [1, 5], "right"),
    new Car(3, "purple", [3, 2], "right"),
    new Car(2, "light-blue", [5, 0], "down"),
    new Car(3, "pink", [4, 5], "down"),
    new Car(2, "brown", [5, 3], "down"),
    new Car(2, "grey", [5,5], "right")
];

// Custom Level 9
const customLevel9 = () => [
    new Car(2, "red", [2, 2], "right"),
    new Car(2, "yellow", [1, 1], "down"),
    new Car(2, "green", [0, 3], "right"),
    new Car(2, "orange", [1, 4], "down"),
    new Car(2, "blue", [1, 5], "down"),
    new Car(2, "purple", [3, 3], "down"),
    new Car(2, "light-blue", [3 , 1], "right"),
    new Car(3, "pink", [4, 5], "right"),
    new Car(3, "brown", [5, 5], "right"),
    new Car(2, "grey", [5,0], "down"),
    new Car(2, "black", [5, 1], "down"),
    new Car(2, "light-green", [5, 2], "down")
];

// Custom Level 10
const customLevel10 = () => [
    new Car(2, "red", [2, 3], "right"),
    new Car(2, "yellow", [0, 2], "right"),
    new Car(2, "green", [1, 3], "down"),
    new Car(3, "orange", [2, 4], "down"),
    new Car(3, "blue", [3, 2], "right"),
    new Car(2, "purple", [5, 1], "down"),
    new Car(2, "light-blue", [4 , 3], "right"),
    new Car(2, "pink", [5, 3], "right"),
    new Car(2, "grey", [4,5], "right"),
    new Car(2, "light-green", [5, 5], "right")
];

// Custom Level 11
const customLevel11 = () => [
    new Car(2, "red", [2, 1], "right"),
    new Car(2, "yellow", [1, 0], "down"),
    new Car(2, "green", [1, 1], "down"),
    new Car(2, "orange", [3, 1], "right"),
    new Car(2, "blue", [1, 5], "right"),
    new Car(2, "purple", [3, 2], "down"),
    new Car(2, "light-blue", [3 , 3], "down"),
    new Car(2, "pink", [3, 5], "down"),
    new Car(2, "grey", [5,5], "down"),
    new Car(2, "light-green", [5, 3], "down"),
    new Car(2, "black", [5, 2], "down")
];

// Custom Level 12
const customLevel12 = () => [
    new Car(2, "red", [2, 1], "right"),
    new Car(2, "yellow", [1, 0], "down"),
    new Car(2, "green", [2, 2], "down"),
    new Car(2, "orange", [0, 3], "right"),
    new Car(2, "blue", [0, 5], "right"),
    new Car(3, "purple", [3, 3], "down"),
    new Car(2, "light-blue", [2 , 5], "down"),
    new Car(2, "pink", [3, 5], "right"),
    new Car(2, "grey", [5,4], "down"),
    new Car(2, "light-green", [5, 3], "right"),
    new Car(3, "black", [5, 1], "down")
];

// Custom Level 13
const customLevel13 = () => [
    new Car(2, "red", [2, 3], "right"),
    new Car(2, "yellow", [0, 1], "right"),
    new Car(3, "green", [2, 4], "down"),
    new Car(2, "orange", [1, 3], "right"),
    new Car(2, "blue", [2, 1], "down"),
    new Car(2, "purple", [4, 1], "down"),
    new Car(2, "light-blue", [4 , 3], "down"),
    new Car(2, "pink", [3, 5], "right"),
    new Car(2, "grey", [4,5], "right"),
    new Car(2, "light-green", [5, 5], "right")
];

// Custom Level 14
const customLevel14 = () => [
    new Car(2, "red", [2, 1], "right"),
    new Car(2, "yellow", [1, 1], "down"),
    new Car(3, "green", [3, 2], "down"),
    new Car(2, "orange", [0, 5], "right"),
    new Car(2, "blue", [1, 5], "right"),
    new Car(2, "purple", [3, 5], "down"),
    new Car(2, "light-blue", [5 , 5], "down"),
    new Car(2, "pink", [5, 4], "down"),
    new Car(3, "light-green", [4, 3], "right")
];

// Custom Level 15
const customLevel15 = () => [
    new Car(2, "red", [2, 2], "right"),
    new Car(2, "yellow", [1, 0], "down"),
    new Car(2, "green", [3, 0], "down"),
    new Car(2, "orange", [1, 2], "down"),
    new Car(3, "blue", [0, 5], "right"),
    new Car(2, "purple", [2, 3], "down"),
    new Car(2, "light-blue", [1 , 5], "right"),
    new Car(3, "pink", [4, 5], "down"),
    new Car(2, "grey", [3, 4], "down"),
    new Car(2, "brown", [5, 1], "down"),
    new Car(2, "light-green", [3, 2], "right"),
    new Car(3, "black", [4, 4], "right"),
];

// Custom Level 16
const customLevel16 = () => [
    new Car(2, "red", [2, 3], "right"),
    new Car(2, "yellow", [1, 0], "down"),
    new Car(2, "green", [3, 0], "down"),
    new Car(2, "orange", [1, 2], "down"),
    new Car(3, "blue", [0, 5], "right"),
    new Car(3, "purple", [1, 5], "right"),
    new Car(2, "light-blue", [3 , 4], "down"),
    new Car(2, "pink", [3, 5], "down"),
    new Car(3, "grey", [5,3], "down"),
    new Car(2, "brown", [4, 5], "right"),
    new Car(2, "light-green", [3, 2], "right"),
    new Car(3, "dark-green", [5, 2], "right")
];

// Custom Level 17
const customLevel17 = () => [
    new Car(2, "red", [2, 1], "right"),
    new Car(2, "yellow", [1, 0], "down"),
    new Car(2, "green", [1, 2], "right"),
    new Car(2, "orange", [2, 3], "down"),
    new Car(2, "blue", [3, 2], "down"),
    new Car(2, "purple", [4, 3], "down"),
    new Car(3, "light-blue", [4 , 4], "down"),
    new Car(2, "pink", [3, 5], "down"),
    new Car(2, "grey", [5,5], "down"),
    new Car(2, "brown", [5, 4], "right"),
    new Car(2, "light-green", [5, 1], "down"),
    new Car(2, "black", [3, 1], "right"),
    new Car(2, "dark-green", [5, 2], "down")
];

// Custom Level 18
const customLevel18 = () => [
    new Car(2, "red", [2, 2], "right"),
    new Car(3, "yellow", [2, 0], "down"),
    new Car(2, "green", [0, 2], "right"),
    new Car(2, "orange", [1, 2], "right"),
    new Car(2, "blue", [0, 5], "right"),
    new Car(3, "purple", [3, 4], "down"),
    new Car(2, "light-blue", [3 , 3], "down"),
    new Car(2, "pink", [3, 1], "right"),
    new Car(2, "grey", [4,2], "down"),
    new Car(2, "brown", [5, 3], "down"),
    new Car(2, "light-green", [4, 5], "right")
];

// Custom Level 19
const customLevel19 = () => [
    new Car(2, "red", [2, 2], "right"),
    new Car(2, "yellow", [1, 1], "down"),
    new Car(2, "green", [1, 2], "down"),
    new Car(2, "orange", [1, 4], "right"),
    new Car(2, "blue", [2, 5], "down"),
    new Car(2, "purple", [3, 3], "down"),
    new Car(2, "light-blue", [3 , 5], "right"),
    new Car(3, "pink", [4, 5], "right"),
    new Car(2, "grey", [3, 1], "right"),
    new Car(2, "brown", [5, 2], "down"),
    new Car(2, "light-green", [3, 1], "right"),
    new Car(2, "dark-green", [5, 0], "down")
];

// Custom Level 20
const customLevel20 = () => [
    new Car(2, "red", [2, 4], "right"),
    new Car(3, "yellow", [2, 5], "down"),
    new Car(3, "green", [2, 2], "down"),
    new Car(2, "orange", [0, 4], "right"),
    new Car(2, "blue", [3, 1], "right"),
    new Car(2, "purple", [5, 0], "down"),
    new Car(2, "light-blue", [4 ,3], "down"),
    new Car(3, "pink", [5, 3], "right"),
    new Car(2, "light-green", [4, 2], "right"),
    new Car(2, "brown", [1, 1], "right"),
    new Car(2, "dark-green", [4, 5], "right")
];

// Custom Level 21
const customLevel21 = () => [
    new Car(2, "red", [2, 3], "right"),
    new Car(3, "yellow", [0, 2], "right"),
    new Car(2, "green", [5, 1], "right"),
    new Car(2, "orange", [5, 2], "down"),
    new Car(2, "blue", [4, 0], "down"),
    new Car(2, "purple", [4, 1], "down"),
    new Car(3, "light-blue", [4 , 5], "right"),
    new Car(2, "pink", [3, 5], "right"),
    new Car(3, "grey", [2, 4], "down"),
    new Car(2, "light-green", [2, 1], "down")
];

// Custom Level 22
const customLevel22 = () => [
    new Car(2, "red", [2, 4], "right"),
    new Car(3, "yellow", [3, 1], "down"),
    new Car(2, "green", [3, 0], "down"),
    new Car(2, "orange", [1, 2], "down"),
    new Car(2, "blue", [1, 3], "down"),
    new Car(2, "purple", [1, 5], "right"),
    new Car(3, "light-blue", [3 , 1], "down"),
    new Car(2, "pink", [0, 1], "right"),
    new Car(2, "grey", [4, 2], "down"),
    new Car(2, "brown", [4,1], "right"),
    new Car(3, "light-green", [5, 4], "right"),
    new Car(2, "black", [3, 5], "down"),
    new Car(2, "dark-green", [5, 5], "down"),
];

// Custom Level 23
const customLevel23 = () => [
    new Car(2, "red", [2, 2], "right"),
    new Car(2, "yellow", [1, 0], "down"),
    new Car(2, "green", [0, 2], "right"),
    new Car(2, "orange", [0, 4], "right"),
    new Car(3, "blue", [1, 5], "right"),
    new Car(2, "purple", [3, 3], "down"),
    new Car(3, "light-blue", [4 , 4], "down"),
    new Car(3, "pink", [4, 5], "down"),
    new Car(2, "grey", [5,3], "down"),
    new Car(2, "brown", [5, 2], "down"),
    new Car(2, "light-green", [3, 1], "right"),
    new Car(2, "black", [4, 1], "right"),
    new Car(2, "dark-green", [5, 5], "right"),

];

// Custom Level 24
const customLevel24 = () => [
    new Car(2, "red", [2, 1], "right"),
    new Car(2, "yellow", [1, 0], "down"),
    new Car(2, "green", [0, 2], "right"),
    new Car(2, "orange", [0, 4], "right"),
    new Car(2, "blue", [1, 4], "right"),
    new Car(2, "purple", [2, 2], "down"),
    new Car(2, "light-blue", [3 , 3], "down"),
    new Car(3, "pink", [4, 5], "down"),
    new Car(3, "grey", [4,4], "down"),
    new Car(2, "light-green", [4, 3], "right"),
    new Car(3, "brown", [5, 1], "down"),
    new Car(3, "black", [5, 4], "right")
];

// Custom Level 25
const customLevel25 = () => [
    new Car(2, "red", [2, 1], "right"),
    new Car(3, "yellow", [2, 2], "down"),
    new Car(3, "green", [0, 5], "right"),
    new Car(2, "orange", [2, 3], "down"),
    new Car(2, "blue", [2, 4], "down"),
    new Car(3, "purple", [5, 0], "down"),
    new Car(3, "light-blue", [5 , 1], "down"),
    new Car(2, "pink", [3, 4], "right"),
    new Car(3, "brown", [4, 4], "right"),
    new Car(3, "grey", [5,4], "right"),
    new Car(3, "light-green", [5, 5], "down")
];

function setUpGame(cars, container) {
    const board = new Board(cars);
    const view = new View(board, container);
}

// customLevelButtons definition
const customLevelButtons = document.querySelectorAll('.custom-level-button');

// customLevels definition
const customLevels = [
    [customLevel1, customLevel2, customLevel3, customLevel4, customLevel5],
    [customLevel6, customLevel7, customLevel8, customLevel9, customLevel10],
    [customLevel11, customLevel12, customLevel13, customLevel14, customLevel15],
    [customLevel16, customLevel17, customLevel18, customLevel19, customLevel20],
    [customLevel21, customLevel22, customLevel23, customLevel24, customLevel25]
];

// Added event listeners to custom level buttons
customLevelButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (!window.location.href.endsWith('html')) {
            window.location.href = window.location.href.slice(0, -1) + (index + 1);
        }
        container.innerHTML = '';
        document.querySelector(".win-phrase").classList.remove("show");
        const levels = customLevels[index];
        const randomLevelIndex = Math.floor(Math.random() * levels.length);
        setUpGame(levels[randomLevelIndex](), container);
    });
});

let level = parseInt(window.location.href.split("=")[1]);
let maxLevel = localStorage.getItem("maxLevel");
for (let i = 0; i < maxLevel; i++) {
    if (i < customLevelButtons.length) {
        customLevelButtons[i].disabled = false;
    }
}
const initialLevels = customLevels[level - 1];
const initialLevelIndex = Math.floor(Math.random() * 5);
setUpGame(initialLevels[initialLevelIndex](), container);
document.querySelector(".current-level").classList.remove("current-level");
document.querySelector(".custom-level-button").classList.add("current-level");

printTopScores();
document.getElementById("thisLevel").innerText = `level: ${level}`;