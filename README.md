# Game of Life

> This project was created with Typescript by Divine Hycenth to solve a coding challenge.

You can find the `Game of life` module in the `src` directory of this repository. This module is the core engine of this application and can be used on any form of javascript project.

## Usage

### Import Game of life

```js
import GameOfLife from 'src/gameOfLife';
```

### Instantiate a new Game of life class

The `GameOfLife` class takes requires a parameter which is an object with properties `rows` and `column` and both values should be numbers.

```js
const gameOfLife = new GameOfLife({ rows: 20, columns: 20 });
```

### Available methods

1. ComputeGrid: This method is essentially the core logic of this module and it accepts an argument of `grid` which is an array.
2. generateRandomGrid: This module returns an `Array` of arrays with randomly generated 1's and 0's
3. generateEmptyGrid: This method returns an `Array` of arrays with zeroes.

### Complete Example

```js
import GameOfLife from 'src/gameOfLife';

const gol = new GameOfLife({ rows: 50, columns: 50 });

let grid = [];
gol.generateRandomGrid(); // => fils out the grid with 1's and 0's
gol.computeGrid(grid); // => Starts the game of life engine
gol.generateEmptyGrid(); // => generates an empty grid.
```
