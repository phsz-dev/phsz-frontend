interface Exam {
  id: number
  userId: number
  name: string
  status: string
  paper: Paper
  startTime: string
  endTime: string
  questions: Answer[]
  score: number
}

interface Paper {
  id?: number
  name: string
  content: string
  durationSeconds: number
  totalScore: number
  deadline: string
  questions: PaperQuestion[]
}

interface PaperQuestion {
  sequence: number
  score: number
  question: Question
}

type QuestionType = 'text' | 'mcq'
interface Question {
  id: number | undefined
  text: string
  type: QuestionType
  options?: Option[]
  answer: string
}

interface Option {
  id: number | undefined
  text: string
}

interface Answer {
  examination: number
  question: number
  answer: string
}

export type { Exam, Paper, PaperQuestion, Question, Option, Answer }
