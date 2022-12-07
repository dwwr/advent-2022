import { input } from './input'


// this is all bad
const detectStartOfPacketMarker = (
  input: string,
  markerLength: number
): number => {
  const markerDepth = [...input].reduce((depth) => {
    const slice = input.slice(depth, depth + markerLength)
    if (slice.match(/^.*(.).*\1.*$/) === null) {
      return depth
    }
    return depth + 1
  }, 0)
  return markerDepth + markerLength // offset
}

console.log(detectStartOfPacketMarker(input, 4))
console.log(detectStartOfPacketMarker(input, 14))