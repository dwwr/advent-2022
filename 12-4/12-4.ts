import { input } from './input'

const isOnePairFullyContained = (group: number[][]): boolean => {
	const [first, second] = group

	if (
		(first[0] >= second[0] && first[1] <= second[1]) ||
		(second[0] >= first[0] && second[1] <= first[1])
	) {
		return true
	}
	return false
}

const generateRangePairs = (input: string): number => {
	const groups = input.split('\n').map((group) => {
		return group.split(',').map((pair) => {
			return pair.split('-').map((n) => Number(n))
		})
	})

	const containedPairsTotal = groups.reduce((sum, group) => {
		return isOnePairFullyContained(group) ? sum + 1 : sum
	}, 0)

	return containedPairsTotal
}

console.log(generateRangePairs(input))