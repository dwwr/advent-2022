import { input } from "./input"

const mostCalories = (input: string): number => {
  const elvesFood: number[][] = input.split('\n')
    .reduce((acc: number[][], curr, i) => {
      const cal = Number(curr)
      if (!cal) {
        return [...acc, []]
      }
      const elf = acc[acc.length - 1] || []
      return [...acc.slice(0, i), [...elf, cal]]
    }, [])

  const calorieSums = elvesFood.map(bag => {
    return bag.reduce((total, item) => total + item, 0)
  })

  return Math.max(...calorieSums)
}

console.log(mostCalories(input))