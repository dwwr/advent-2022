import { input } from './input'

const shortInput = `$ ls
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
  size?: number
  parent?: Node
  children: Node[]
}

const buildFS = (input: string): Node => {
  const commands = input.split('\n')

  const tree = commands.reduce(
    (a: Node, c) => {
      return buildNode(c, a)
    },
    {
      name: '/',
      children: [],
    }
  )
  console.log('tree', JSON.stringify(tree))
  return tree
}

const buildNode = (input: string, tree: Node): Node => {
  const args = input.split(' ')
  // console.log('command', input)
  console.log(args)

  console.log(tree)
  if (args[1] === 'cd') {
    if (args[2] === '..') {
      return tree
    }
    return {
      ...tree,
      children: [...tree.children, buildNode(input, tree)],
    }
  }

  if (args[1] === 'ls') {
    return tree
  }

  return {
    ...tree,
    children: [...tree.children, { name: input, children: [] }],
  }
}

buildFS(shortInput)
