/*The View class manages the game's user interface. 
It sets up the game board, handles user interactions, updates the game state, 
and renders the current state of the board. 
It also handles winning conditions and displays the score.*/

import { timer_func } from './main.js';
import { printTopScores } from './mainBoard.js';
import { printLevel } from './mainBoard.js';
document.addEventListener("DOMContentLoaded", function() {
    printLevel();
});


export class View {
    constructor(board, container) {
        this.container = container;
        this.board = board;
        window.moveCount = 0; // Counts the number of moves
        this.render(); // Calls the function that displays the current state of the board
        window.addEventListener("keydown", event => {  // Activates the keyboard keys
            if (this.board.selectedCar) { // Checks if a car is currently selected
                const keyCode = event.keyCode; // Stores the selected key
                // Checks all directions for the selected car
                const directions = { 38: "up", 40: "down", 37: "left", 39: "right" };
                const direction = directions[keyCode]; // Displays the appropriate direction if it exists
                if (direction) {
                    event.preventDefault(); // Prevents the default arrow key behavior
                    this.board.selectedCar.move(direction);  // Moves the car in the correct direction
                    this.render(); // Calls the function that displays the current state of the board
                    // Checks if the red car has reached the last square in the row
                    // If so, calls the handleWin function
                    // which handles the win
                    if (this.board.selectedCar.color === "red" && this.board.isWon()) this.handleWin();
                }
            }
        });
    }

    setUpBoard() { // Creates the game board
        // Creates an outer div
        const outerDiv = document.createElement('div');
        outerDiv.classList.add('outer-container');  // Adds a class to the outer div

        // Adds the outer div to the game container
        this.container.appendChild(outerDiv);

        for (let i = 0; i < this.board.grid.length; i++) {
            const row = document.createElement('ul');
            for (let j = 0; j < this.board.grid.length; j++) {
                const square = document.createElement('li');
                square.dataset.pos = [i, j];  // Represents the position of the cell on the board
                row.appendChild(square); // Connects the cell to the row
            }
            row.dataset.row = i; // Indicates the position of the row on the board
            outerDiv.appendChild(row); // Connects the row to the outer div
        }

        const moveCounter = document.createElement('div');
        moveCounter.classList.add("move-counter"); // Adds a class to the div
        outerDiv.appendChild(moveCounter); // Connects the move counter to the outer div
        moveCounter.textContent = `Moves: ${window.moveCount}`; // Displays the move count on the screen
    }

    //A function that handles winning
    handleWin() {
        const count = 200,
            defaults = {
                origin: { y: 0.7 },
            };
        // confetti
        function fire(particleRatio, opts) {
            confetti(
                Object.assign({}, defaults, opts, {
                    particleCount: Math.floor(count * particleRatio),
                })
            );
        }

        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });

        fire(0.2, {
            spread: 60,
        });

        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        });

        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        });

        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });
        window.removeEventListener("keydown", this.keydownHandler);
        document.querySelectorAll("." + this.board.selectedCar.color).forEach(elem => elem.classList.remove("selected"));
        document.getElementById("exitArrow").display="none";
        let level = parseInt(window.location.href.split("=")[1]);
        if (level >= localStorage.getItem("maxLevel") && level != 5) {
            localStorage.setItem("maxLevel", level + 1);
            document.querySelectorAll('.custom-level-button')[level].disabled = false;
        }

        this.addUser();
        document.getElementById("darkbackgroung_youWin").style.display = "unset";
        //alert(timer);
        clearInterval(timer_func);
        document.getElementById("yourScore").innerHTML = this.getFinallScore();

    }

    //A function that updates the current state of the board
    render() {
        this.container.innerHTML = '';
        this.setUpBoard();
        this.board.setUpCars();
        if (this.board.selectedCar)
            document.querySelectorAll("." + this.board.selectedCar.color).forEach(elem => elem.classList.add("selected"));
    }

    getScore() {
        var cLevel = parseInt(window.location.href.split("=")[1]);
        var levelArr = [100, 200, 300, 400, 500];
        return levelArr[cLevel - 1];
    }

    getFinallScore() {
        var username = localStorage.getItem('userName');
        let usersScoresList = JSON.parse(localStorage.getItem('usersScores')) || [];
        for (let index = 0; index < usersScoresList.length; index++) {
            if (usersScoresList[index].username === username) {
                return usersScoresList[index].score;
            }
        }
    }

    // add user
    addUser() {
        var username = localStorage.getItem('userName');
        var score = this.getScore();
        var level = localStorage.getItem("maxLevel") - 1;
        let usersScoresList = JSON.parse(localStorage.getItem('usersScores')) || [];
        let isNewUser = true;
        for (let index = 0; index < usersScoresList.length; index++) {
            if (usersScoresList[index].username === username) {
                usersScoresList[index].score += score;
                usersScoresList[index].level = localStorage.getItem("maxLevel") - 1;
                localStorage.setItem("usersScores", JSON.stringify(usersScoresList));
                isNewUser = false;
                break;
            }
        }
        if (isNewUser) {
            usersScoresList.push({ username: username, score: score, level: localStorage.getItem("maxLevel") - 1 });
            localStorage.setItem("usersScores", JSON.stringify(usersScoresList));
            console.log(`User ${username} added with score ${score} his level ${level}`);
        }
        printTopScores();
        console.log(usersScoresList);
    
    }
}