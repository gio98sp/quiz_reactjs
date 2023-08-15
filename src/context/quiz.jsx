import { createContext, useReducer } from 'react';

import questions from '../data/questions';

export const QuizContext = createContext();

const STAGES = ['Start', 'Playing', 'End'];

const initialStage = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_STAGE':
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case 'REORDER_QUESTIONS':
      const reorderQuestions = questions.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        questions: reorderQuestions,
      };

    case 'CHANGE_QUESTION':
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;
      if (!questions[nextQuestion]) endGame = true;
      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[2] : state.gameStage,
        answerSelected: false
      };

    case 'CHECK_ANSWER':
      if(state.answerSelected) return state
      const answer = action.payload.answer;
      const option = action.payload.option;
      let correctAnswer = 0;
      if (answer === option) correctAnswer = 1;
      return {
        ...state,
        score: state.score + correctAnswer,
        answerSelected: option,
      };

    case 'NEW_GAME':
      return initialStage;

    default:
      return state;
  }
};

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialStage);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
