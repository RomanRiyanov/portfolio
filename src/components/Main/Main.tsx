import './Main.scss'
import sputnik from '../../assets/images/sputnikKseniia4.png'

export function Main() {

  return (
    <section id="main" className="main">
      <h1 className="main-title">
        Привет, меня зовут <span>Риянов Роман</span>
      </h1>
      <h1 className="main-title">
        Я - <strong className='typing'></strong>
      </h1>
      <img id='picture' src={sputnik} alt="Спутник" className="main-image" />
    </section>
  )
}
