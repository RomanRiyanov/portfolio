import './Main.scss'
// import sputnik from '../../assets/images/sputnik.svg'
// import sputnik from '../../assets/images/space-station.svg'
// import satellite from '../../assets/images/satellite1.svg'
// import sputnik from '../../assets/images/sputnik-round.png'

// import sputnik from '../../assets/images/sputnikKseniia1.png'
// import sputnik from '../../assets/images/sputnikKseniia2.png'
// import sputnik from '../../assets/images/sputnikKseniia3.png'
import sputnik from '../../assets/images/sputnikKseniia4.png'
// import sputnik from '../../assets/images/sputnikKseniia5.png'

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
