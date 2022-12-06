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

  const [base, rows] = [cleanInput[0], cleanInput.slice(1)]

  const stacks: Record<string, Array<string>> = [...base].reduce(
    (acc, curr) => {
      if (curr === ' ') {
        return acc
      }
      return { ...acc, [curr]: [] }
    },
    {}
  )

  rows.forEach((row) => {
    ;[...row].forEach((crate, i) => {
      if (crate !== ' ') {
        const baseIndex: number = Number(base[i])
        stacks[baseIndex] = [...stacks[baseIndex], crate]
      }
    })
  })
  console.log(stacks)
}

parseStacks(startingState)
