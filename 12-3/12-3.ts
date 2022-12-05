import { input } from './input'

const scoreMap: Record<string, number> = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').reduce((map: Record<string, number>, letter, i) => {
  map[letter] = i + 1
  return map
}, {})

const findDupeItem = (rucksack: string): string => {
  const half = Math.ceil(rucksack.length / 2)
  const [first, second] = [rucksack.slice(0, half), rucksack.slice(half)]
  const dupe = first.split('').reduce((found: string, letter) => {
    if (found.length) {
      return found
    }
    return second.indexOf(letter) > -1 ? letter : ''
  }
    , '')
  return dupe
}

const sumDupePriorities = (input: string): number => {
  const rucksacks = input.split('\n')
  return rucksacks.reduce((sum, sack) => {
    const dupe = findDupeItem(sack)
    return sum + scoreMap[dupe]
  }, 0)
}

console.log(sumDupePriorities(input))

const findBadge = (group: string[]): string => {
  const [first, second, third] = group
  const commonItem = first.split('').reduce((found: string, letter) => {
    if (found.length) {
      return found
    }
    return second.indexOf(letter) > -1 && third.indexOf(letter) > -1 ? letter : ''
  }
    , '')

  return commonItem
}

const sumBadgeItems = (input: string): number => {
  const groups = input.split('\n').reduce((groups: string[][], curr, i, arr) => {
    const currentGroup = groups[groups.length - 1] || []
    if ((i + 1) % 3 === 0 && i > 0 && i < arr.length - 1) {
      return [...groups.slice(0, groups.length - 1), [...currentGroup, curr], []]
    }
    return [...groups.slice(0, groups.length - 1), [...currentGroup, curr]]
  }, [])
  const badges = groups.map(group => {
    return findBadge(group)
  })
  const sum = badges.reduce((sum, badge) => {
    return sum + scoreMap[badge]
  }, 0)
  return sum
}
console.log(sumBadgeItems(input))