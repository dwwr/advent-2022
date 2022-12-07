import { input } from './input'


// this is all bad
const detectStartOfPacketMarker = (input: string): number => {
  const markerDepth = [...input].reduce((depth) => {
    const slice = input.slice(depth, depth + 4)
    if (slice.match(/^.*(.).*\1.*$/) === null) {
      return depth
    }
    return depth + 1
  }, 0)
  return markerDepth + 4 // offset
}

console.log(detectStartOfPacketMarker(input))