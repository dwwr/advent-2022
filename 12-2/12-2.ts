import { input } from "./input"

const oppMoves: Record<string, string> = {
  A: 'rock',
  B: 'paper',
  C: 'scissors'
}

const myMoves: Record<string, string> = {
  X: 'rock',
  Y: 'paper',
  Z: 'scissors'
}

// opponentMove[myMove] === myOutcome
const outcomeMap: Record<string, Record<string, string>> = {
  rock: {
    rock: 'draw',
    paper: 'win',
    scissors: 'lose'
  },
  paper: {
    rock: 'lose',
    paper: 'draw',
    scissors: 'win'
  },
  scissors: {
    rock: 'win',
    paper: 'lose',
    scissors: 'draw'
  }
}

const outcomeScores: Record<string, number> = {
  win: 6,
  draw: 3,
  lose: 0
}

const moveScores: Record<string, number> = {
  rock: 1,
  paper: 2,
  scissors: 3
}

const generateRoundsFromInput = (input: string) => {
  return input.split('\n')
}

const scoreRound = (round: string): number => {
  const oppMove = oppMoves[round[0]]
  const myMove = myMoves[round[2]]
  const outcome = outcomeMap[oppMove][myMove]
  return outcomeScores[outcome] + moveScores[myMove]
}

const scoreStrategyGuide = (input: string): number => {
  const rounds = generateRoundsFromInput(input)
  const totalScore = rounds.reduce((total, round) => {
    const roundScore = scoreRound(round)
    return total + roundScore
  }, 0)
  return totalScore
}


console.log(scoreStrategyGuide(input))