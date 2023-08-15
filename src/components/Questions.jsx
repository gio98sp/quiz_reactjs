import { useContext } from 'react';

import { QuizContext } from '../context/quiz';

import './Questions.css';
import { Option } from './Option';

export const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: 'CHECK_ANSWER',
      payload: {
        answer: currentQuestion.answer,
        option,
      },
    });
  };

  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>
      {!quizState.answerSelected && (
        <>
          {currentQuestion.tip && quizState.help === false && (
            <button onClick={() => dispatch({ type: 'SHOW_TIP' })}>Dica</button>
          )}
          {quizState.help === 'tip' && (
            <p>{currentQuestion.tip}</p>
          )}
        </>
      )}
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}>Continuar</button>
      )}
    </div>
  );
};
