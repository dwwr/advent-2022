import { generateElfBagsFromInput, sumCaloriesPerElfBag } from "../12-1/12-1"
import { input } from "../12-1/input"

const sumTopThreeElfBags = (input: string) => {
  const elfBags = generateElfBagsFromInput(input)
  const sums = sumCaloriesPerElfBag(elfBags)
  const topThree = sums.sort((a, b) => a > b ? 1 : -1).slice(-3)
  return topThree.reduce((total, item) => total + item, 0)
}

console.log(sumTopThreeElfBags(input))