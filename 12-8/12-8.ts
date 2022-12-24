import { input } from './input'

const smallInput = `30373
25512
65332
33549
35390`

// how many trees are visible from outside the grid?

const countVisibleTrees = (input: string) => {
  const grid = input.split('\n')
  console.log(grid)

  const totalVisible = grid.reduce((sum, currrentRow, rowIndex) => {
    const row = Array.from(currrentRow).map((c) => Number(c))
    console.log(row)
    if (rowIndex === 0 || rowIndex === grid.length - 1) {
      return sum + row.length
    }
    return (
      sum +
      row.reduce((a, c, i) => {
        return a + isVisibleInRow(row, c, i)
      }, 0)
    )
  }, 0)

  return totalVisible
}

const isVisibleInRow = (
  row: number[],
  height: number,
  subjectIndex: number
): number => {
  if (subjectIndex === 0 || subjectIndex === row.length - 1) {
    return 1
  }
  let visible = 0
  let l = 0
  let r = row.length - 1

  while (l < subjectIndex || r > subjectIndex) {
    if (visible === 1) {
      break
    }
    if (row[l] < height) {
      visible = 1
    }
    if (row[l] > height) {
      visible = 0
    }
    if (row[r] < height) {
      visible = 1
    }
    if (row[l] > height) {
      visible = 0
    }
    l++
    r--
  }

  return visible
}

// console.log(
//   isVisibleInRow(
//     Array.from('30373').map((c) => Number(c)),
//     3,
//     2
//   )
// )
console.log(countVisibleTrees(input))
