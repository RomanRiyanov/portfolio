import './Main.scss'
// import sputnik from '../../assets/images/sputnik.svg'
// import sputnik from '../../assets/images/space-station.svg'
// import sputnik from '../../assets/images/satellite1.svg'
import sputnik from '../../assets/images/sputnik-round.png'


export function Main() {

  return (
    <section id="main" className="main">
      <h1 className="main-title">
        Привет, меня зовут <span>Рома Риянов</span>
      </h1>
      <h2 className="main-title">
        Я - фронт-энд разработчик
      </h2>
      <img src={sputnik} alt="Спутник" className="main-image" />

    </section>
  )
}
