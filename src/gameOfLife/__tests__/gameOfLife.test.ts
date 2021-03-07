import GameOfLife from "../";


const items = 5
const gol = new GameOfLife({rows: items, columns: items})



describe('Game of Life tests', () => {
  test('should columns and rows should be the same as items', () => {
    expect(gol.columns).toBe(items)
    expect(gol.rows).toBe(items)
  })

  test('should generate random rows and columns', () => {
    expect(gol.generateRandomGrid()).toHaveLength(items)

    expect(gol.generateRandomGrid()[0]).toEqual(expect.arrayContaining([1] || [0]))
  })

  test('should generate an empty grid', () => {
    expect(gol.generateEmptyGrid()[0]).toEqual(expect.arrayContaining([0]))

    expect(gol.generateEmptyGrid()).toHaveLength(items)

  })
  
})
