import { input } from './input'

const shortInput = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`

// build tree from terminal output
// get sums of dirs (recursively)
// return sum of all dirs with size < 100000

interface Node {
  name: string
  parent?: Node
  children?: Node[]
}

const buildFS = (input: string): Record<string, any> => {
  const commands = input.split('\n')
  // console.log(commands)

  const tree = commands.reduce((a, c) => {
    return buildNode(c, a, a)
  }, {})
  console.log('tree', tree)
  return tree
}

const buildNode = (
  input: string,
  tree: Record<string, any>,
  parent: Record<string, any>
): Record<string, any> => {
  console.log(input.slice(0, 4))
  if (input.slice(0, 7) === '$ cd ..') {
    return buildNode(parent[input.slice(5)] || '', tree, parent)
  }
  if (input.slice(0, 4) === '$ cd') {
    return {
      ...tree,
      [input.slice(5)]: buildNode(input.slice(5), tree[input.slice(5)], tree),
    }
  }
  if (input.slice(0, 4) === '$ ls') {
    return tree
  }
  return { ...tree }
}

buildFS(shortInput)
