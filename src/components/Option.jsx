import { useContext } from 'react';

import { QuizContext } from '../context/quiz';

import './Option.css';

export const Option = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div
      className={`option ${
        quizState.answerSelected === option && option === answer ? 'correct' : ''
      } ${quizState.answerSelected === option && option !== answer ? 'wrong' : ''}`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};
