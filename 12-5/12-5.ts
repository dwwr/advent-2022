import { input } from './input'

const startingState = `    [C]         [Q]         [V]
    [D]         [D] [S]     [M] [Z]
    [G]     [P] [W] [M]     [C] [G]
    [F]     [Z] [C] [D] [P] [S] [W]
[P] [L]     [C] [V] [W] [W] [H] [L]
[G] [B] [V] [R] [L] [N] [G] [P] [F]
[R] [T] [S] [S] [S] [T] [D] [L] [P]
[N] [J] [M] [L] [P] [C] [H] [Z] [R]
 1   2   3   4   5   6   7   8   9`

// move 2 from 4 to 6
// move x crates from stack y to stack z
// crates are 'popped' and 'pushed' one at a time
// return string of top crates from each stack in form 'PCVPQSPVZ' (For example above)

const parseStacks = (input: string) => {
  const cleanInput = input
    .replace(/\[/g, ' ')
    .replace(/\]/g, ' ')
    .split('\n')
    .reverse()
  console.log(cleanInput)
  // const cols = cleanInput[0].split(' ').join('').split('')
  // const stacks = Array.from(cols).reduce((acc, curr) => {
  //   return (acc?[curr] = [])
  // }, {})

  // console.log(stacks)
  // console.log(cols)
  // cleanInput.forEach((row, i, rows) => {
  //   const char = row[i]
  //   if (char !== ' ') {
  //     stacks[rows[0][i]] = [...stacks[rows[0][i]]]
  //   }
  // })
  // console.log(stacks)
}

parseStacks(startingState)
