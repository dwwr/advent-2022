import { input } from './input'

const detectStartOfPacketMarker = (
  input: string,
  markerLength: number
): number => {
  const markerDepth = [...input].reduce((depth, _, i) => {
    if (depth) {
      return depth
    }
    const slice = input.slice(i, i + markerLength)
    if (slice.match(/^.*(.).*\1.*$/) === null) {
      return i + markerLength // offset
    }
    return 0
  }, 0)
  return markerDepth
}

console.log(detectStartOfPacketMarker(input, 4))
console.log(detectStartOfPacketMarker(input, 14))