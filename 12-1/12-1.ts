import { input } from "./input"

const findMostCalories = (input: string): number => {
  const elfBags: number[][] = generateElfBagsFromInput(input)
  const calorieSums = sumCaloriesPerElfBag(elfBags)

  return Math.max(...calorieSums)
}

const generateElfBagsFromInput = (input: string) => {
  return input.split('\n')
    .reduce((acc: number[][], curr) => {
      const cal = Number(curr)
      if (!cal) {
        return [...acc, []]
      }
      const elf = acc[acc.length - 1]
      return [...acc.slice(0, acc.length - 1), [...elf, cal]]
    }, [])
}

const sumCaloriesPerElfBag = (elfBags: number[][]) => elfBags.map(bag => {
  return bag.reduce((total, item) => total + item, 0)
})

const sumTopThreeElfBags = (input: string) => {
  const elfBags = generateElfBagsFromInput(input)
  const sums = sumCaloriesPerElfBag(elfBags)
  const topThree = sums.sort((a, b) => a > b ? 1 : -1).slice(-3)
  return topThree.reduce((total, item) => total + item, 0)
}

console.log(findMostCalories(input))
console.log(sumTopThreeElfBags(input))


