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

const parseStacks = (input: string): Record<string, string[]> => {
  const cleanInput = input
    .replace(/\[/g, ' ')
    .replace(/\]/g, ' ')
    .split('\n')
    .reverse()

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
  return stacks
}

const parseMoves = (moves: string) => {
  const clean = moves.split('\n').map((move) => {
    const nums = move
      .split(' ')
      .map((c) => Number(c))
      .filter((n) => !!n)
    return {
      numberOfCrates: nums[0],
      startingCrate: nums[1],
      endingCrate: nums[2],
    }
  })
  return clean
}

const moveCrate = (
  stacks: Record<string, string[]>,
  startingStack: number,
  endingStack: number,
  toMove?: number
) => {
  const numberOfCrates = toMove || 1
  const cratesToMove = stacks[startingStack].slice(-numberOfCrates || -1)
  return {
    ...stacks,
    [startingStack]: [...stacks[startingStack].slice(0, -numberOfCrates || -1)],
    [endingStack]: [...stacks[endingStack], ...cratesToMove],
  }
}

const rearrangeStacksOneByOne = (startingState: string, moves: string) => {
  const parsedState = parseStacks(startingState)
  const parsedMoves = parseMoves(moves)

  const finalState = parsedMoves.reduce((state, move) => {
    let newState = state
    for (let i = 0; i < move.numberOfCrates; i++) {
      newState = moveCrate(newState, move.startingCrate, move.endingCrate)
    }
    return newState
  }, parsedState)

  return finalState
}

const rearrangeStacksInGroups = (startingState: string, moves: string) => {
  const parsedState = parseStacks(startingState)
  const parsedMoves = parseMoves(moves)

  const finalState = parsedMoves.reduce((state, move) => {
    return moveCrate(
      state,
      move.startingCrate,
      move.endingCrate,
      move.numberOfCrates
    )
  }, parsedState)
  return finalState
}

const getStackTops = (endingState: Record<string, string[]>): string => {
  const endingArray = Object.values(endingState)
  const stackTops = endingArray.reduce((acc, curr) => {
    return acc + curr[curr.length - 1]
  }, '')
  return stackTops
}

const finalStatePart1 = rearrangeStacksOneByOne(startingState, input)
console.log(getStackTops(finalStatePart1))

const finalStatePart2 = rearrangeStacksInGroups(startingState, input)
console.log(getStackTops(finalStatePart2))