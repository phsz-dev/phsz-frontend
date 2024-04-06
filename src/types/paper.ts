interface Paper {
  id: number
  name: string
  time_limit: number
  score: number
  questions: Question[]
}

interface Question {
  id: number
  text: string
  type: string
  options?: Option[]
}

interface Option {
  id: number
  text: string
}

export type { Paper, Question, Option }
