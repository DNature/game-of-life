import {produce} from 'immer'


/**
 * GOL stands for Game Of Life.
 */
class GameOfLife {
	operations: any[];
	columns: number;
	rows: number;

	// { rows = 20, columns = 20 }
	constructor({ rows = 20, columns = 20 }) {
		this.operations = [
			[0, 1],
			[0, -1],
			[1, -1],
			[-1, 1],
			[1, 1],
			[-1, -1],
			[1, 0],
			[-1, 0],
		];
		this.rows = rows
		this.columns = columns
	}

	computeGrid(_grid: any[]) {
		const response = produce(_grid, (gridCopy) => {
			for (let i = 0; i < this.rows; i++) {
				for (let j = 0; j < this.columns; j++) {
					let neighbors = 0;

					this.operations.forEach(([x, y]) => {
						const newI = i + x;
						const newJ = j + y;

						if (
							newI >= 0 &&
							newI < this.rows &&
							newJ >= 0 &&
							newJ < this.columns
						) {
							neighbors += _grid[newI][newJ];
						}
					});

					if (neighbors < 2 || neighbors > 3) {
						gridCopy[i][j] = 0;
					} else if (_grid[i][j] === 0 && neighbors === 3) {
						gridCopy[i][j] = 1;
					}
				}
			}
		});

		return response;
	}

	generateRandomGrid() {
		const rows = [];
		for (let i = 0; i < this.rows; i++) {
			rows.push(
				Array.from(Array(this.columns), () => (Math.random() > 0.8 ? 1 : 0))
			);
		}

		return rows;
	}

	generateEmptyGrid() {
		const rows = [];

		for (let i = 0; i < 20; i++) {
			rows.push(Array.from(Array(20), () => 0));
		}

		return rows;
	}
}

export default GameOfLife