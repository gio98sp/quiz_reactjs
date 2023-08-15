import { useContext, useEffect } from 'react'

import { QuizContext } from './context/quiz'
import { Welcome } from './components/Welcome'
import { Questions } from './components/Questions'
import { GameOver } from './components/GameOver'

import './App.css'

export const App = () => {
  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({type: 'REORDER_QUESTIONS'})
  }, [quizState.gameStage === 'Start'])

  return (
    <div className='App'>
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Questions />}
      {quizState.gameStage === 'End' && <GameOver />}
    </div>
  )
}
