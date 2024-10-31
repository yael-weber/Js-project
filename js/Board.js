// אינישילייז - לאתחל

/*The Board class is responsible for creating and managing the game board. 
It initializes a 6x6 grid and stores the cars on the board. 
The class includes methods to set up the cars on the grid and to check for the win condition.*/
export class Board {

    constructor(cars) {
        this.grid = Array(6).fill(Array(6)); // Create board 6*6
        this.cars = cars;
        this.selectedCar;
    }

    //A function that handles and edits the selected vehicles
    setUpCars() {
        this.cars.forEach(car => {
            car.segments.forEach(square => {
                const squareElement = document.querySelectorAll('li')[square[0] * this.grid.length + square[1]];
                squareElement.classList.add(car.color, "car");
                squareElement.addEventListener('click', () => {
                    document.querySelectorAll('.selected').forEach(elem => elem.classList.remove("selected"));
                    document.querySelectorAll("." + car.color).forEach(elem => elem.classList.add("selected")); // Adds the new style to the selected vehicle
                    this.selectedCar = car;
                    car.isSelected = true;// Mark current vehicle as selected
                });
            });
        });
    }

    //A function that checks for win
    isWon() {
        const redCar = this.cars.find(car => car.color === "red");
        const rightmostSegment = redCar.segments[0];
        return rightmostSegment[1] === 5;
    }
    
}
