interface Exam {
  id: number
  name: string
  status: string
  paper: Paper
  startTime: string
  endTime: string
  questions: Answer[]
}

interface Paper {
  id: number
  name: string
  content: string
  durationSeconds: number
  totalScore: number
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

interface Answer {
  examination: number
  question: number
  answer: string
}

export type { Exam, Paper, PaperQuestion, Question, Option, Answer }
