import { createContext, useReducer } from "react";

import questions from '../data/questions'

export const QuizContext = createContext()

const STAGES = ['Start', 'Playing', 'End']

const initialStage = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0
}

const quizReducer = (state, action) => {
  switch(action.type) {
    case 'CHANGE_STAGE':
      return {
        ...state,
        gameStage: STAGES[1]
      }
    case 'REORDER_QUESTIONS':
      const reorderQuestions = questions.sort(() => {
        return Math.random() - 0.5
      })
      return {
        ...state,
        questions: reorderQuestions
      }
    default:
      return state
  }
}

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialStage)

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  )
}