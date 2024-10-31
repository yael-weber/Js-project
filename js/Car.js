/* The Car class initializes a car object with its properties like length, color, starting position, and orientation. 
It sets up the car's body and handles movement based on direction and collision detection.*/

export class Car {
// Initializes a car object with the properties
constructor(length, color, startPos, orientation) {
    this.length = length;
    this.color = color;
    this.startPos = startPos;
    this.orientation = orientation;
    this.segments = [startPos]; //The rest of the squares the car occupies

    this.setUpBody(); // Setting up the car's body
  }

  // Direction translation function
  // Returns the translation for the given direction
  // If no direction is given, returns the translation for the car's current orientation
  directionTranslate(dir) {
    const orientations = {
      down: [1, 0],
      right: [0, 1],
      up: [-1, 0],
      left: [0, -1]
    };
    return dir ? orientations[dir] : orientations[this.orientation];
  }

  // Sets up the car's body based on its length and orientation
  // Defines the positions within the grid
  setUpBody() {
    const oppositeOrientation = this.directionTranslate().map(x => x * -1);  // Reverses the direction of movement obtained from the translation
    for (let i = 0; i < this.length - 1; i++) {
      const bodyPart = this.segments[i].map((coord, idx) => coord + oppositeOrientation[idx]);// Defines the new position of each square occupied by the car
      this.segments.push(bodyPart);
    }
  }

  // Moves the car according to boundary checks and collision detection
  move(direction) {
    const dir = this.directionTranslate(direction);
    let oldHead, newHead;

    if (direction === this.orientation) {
      oldHead = this.segments[0]; // The initial position where the car is standing
      newHead = oldHead.map((coord, idx) => coord + dir[idx]); // The position the car will move to
      if (this.color !== "red" && (newHead[0] > 5 || newHead[1] > 5)) return; // Boundary check
      if (!document.querySelectorAll('li')[newHead[0] * 6 + newHead[1]].classList.contains("car")) {// Collision detection
        this.segments.pop(); // Removes the last square
        this.segments.unshift(newHead); // Adds a square at the beginning
        window.moveCount += 1; // Increments the move count
      }
    } else if (dir[0] === this.directionTranslate()[0] * -1 && dir[1] === this.directionTranslate()[1] * -1) {
      oldHead = this.segments[this.length - 1];
      newHead = oldHead.map((coord, idx) => coord + dir[idx]);
      if (newHead[0] < 0 || newHead[1] < 0) return;
      if (!document.querySelectorAll('li')[newHead[0] * 6 + newHead[1]].classList.contains("car")) {
        this.segments.push(newHead);
        this.segments.shift();
        window.moveCount += 1;
      }
    }
  }
}