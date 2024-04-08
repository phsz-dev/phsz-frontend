interface Exam {
  id: number
  name: string
  status: string
  paper: Paper
  startTime: string
  endTime: string
}

interface Paper {
  id: number
  name: string
  durationSeconds: number
  score: number
  questions: PaperQuestion[]
}

interface PaperQuestion {
  sequence: number
  score: number
  question: Question
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

export type { Exam, Paper, PaperQuestion, Question, Option }
