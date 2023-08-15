import './GameOver.css'
import Welldone from '../img/welldone.svg'

export const GameOver = () => {

  return (
    <div id='gameover'>
      <h2>Fim de jogo!</h2>
      <p>Pontuação: x</p>
      <p>Você acertou y de z perguntas</p>
      <img src={Welldone} alt="Fim de jogo" />
      <button>Reiniciar</button>
    </div>
  )
}