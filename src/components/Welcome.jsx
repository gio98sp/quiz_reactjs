import './Welcome.css';
import Quiz from '../img/quiz.svg'

export const Welcome = () => {
  return (
    <div id='welcome'>
      <div>Seja bem-vindo</div>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  );
};
