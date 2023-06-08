import './Main.scss'
import sputnik from '../../assets/images/sputnik.svg'


export function Main() {

  return (
    <section id="main" className="main">
      <h1 className="main__title">
        Привет, меня зовут Рома Риянов
      </h1>
      <h2 className="main__title">
        Я - фронт-энд разработчик
      </h2>
      <img src={sputnik} alt="" className="main__image" />

    </section>
  )
}
