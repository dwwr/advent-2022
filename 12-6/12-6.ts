import { input } from './input'


// this is all bad
const detectStartOfPacketMarker = (input: string): number => {
  const markerDepth = [...input].reduce((depth, c, i) => {
    const slice = `${input[depth]}${input[depth + 1]}${input[depth + 2]}${
      input[depth + 3]
    }`
    if (slice.match(/^.*(.).*\1.*$/) === null) {
      return depth
    }
    return depth + 1
  }, 0)
  return markerDepth + 4 // offset
}

console.log(detectStartOfPacketMarker(input))