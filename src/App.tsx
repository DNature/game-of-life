import { useCallback, useRef, useState } from 'react';

import { produce } from 'immer';

import GolExample from './gol.gif';
import GameOfLife from './gameOfLife';

const gol = new GameOfLife({ rows: 15, columns: 15 });

function App() {
	const [grid, setGrid] = useState(() => gol.generateEmptyGrid());
	const [running, setRunning] = useState(false);

	const runningRef = useRef(running);
	runningRef.current = running;

	const runSimulation = useCallback(() => {
		if (!runningRef.current) {
			return;
		}

		setGrid((_grid: any[]) => gol.computeGrid(_grid));
		setTimeout(runSimulation, 100);
	}, []);

	return (
		<div className='py-12 w-screen'>
			<h1 className='text-5xl font-bold text-center'>Game of life</h1>
			<p className='text-center'>
				by{' '}
				<a
					href='http://twitter.com/DivineHycenth'
					target='_blank'
					className='hover:underline text-blue-400'
					rel='noopener noreferrer'
				>
					Divine Hycenth
				</a>
			</p>

			<div className='container mx-auto'>
				<div className='my-12 flex items-center justify-center'>
					<button
						className={`px-6 h-8 text-white rounded focus:ring focus:outline-none ${
							running ? 'bg-red-500' : 'bg-blue-500'
						}`}
						onClick={() => {
							setRunning(!running);
							if (!running) {
								runningRef.current = true;
								runSimulation();
							}
						}}
					>
						{running ? 'Stop' : 'Start'}
					</button>
					<button
						className='bg-purple-500 px-6 h-8 text-white rounded focus:ring focus:outline-none  ml-4'
						onClick={() => {
							const rows = gol.generateRandomGrid();

							setGrid(rows);
						}}
					>
						Random
					</button>
					<button
						className='bg-gray-500 px-6 h-8 text-white rounded focus:ring focus:outline-none ml-4'
						onClick={() => {
							setGrid(gol.generateEmptyGrid());
						}}
					>
						Clear
					</button>
				</div>

				<div className='grid place-content-center px-4'>
					<div
						style={{ gridTemplateColumns: `repeat(${gol.columns}, 20px)` }}
						className='grid'
					>
						{grid.map((rows, i) =>
							rows.map((col, j) => (
								<div
									key={`${i}-${j}`}
									style={{
										background: grid[i][j] ? 'black' : undefined,
										width: 20,
										height: 20,
										borderColor: grid[i][j] ? 'white' : 'black',
									}}
									className='border transition-all duration-200'
									onClick={() => {
										const newGrid = produce(grid, (gridCopy) => {
											gridCopy[i][j] = grid[i][j] ? 0 : 1;
										});
										setGrid(newGrid);
									}}
								></div>
							))
						)}
					</div>
				</div>
				<div className='mt-16 text-center'>
					<h2 className='text-2xl font-semibold'>How to Use</h2>

					<div className='mt-6 shadow-2xl'>
						<img src={GolExample} alt='Game of life example' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
