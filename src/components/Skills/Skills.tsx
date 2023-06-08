import './Skills.scss'
import sputnik from '../../assets/images/sputnik.svg'

export function Skills() {

  const skills = [
    {
      name: 'JavaScript',
      picture: sputnik
    },
    {
      name: 'JavaScript',
      picture: sputnik
    },
    {
      name: 'JavaScript',
      picture: sputnik
    },
    {
      name: 'JavaScript',
      picture: sputnik
    },
    {
      name: 'JavaScript',
      picture: sputnik
    },
    {
      name: 'JavaScript',
      picture: sputnik
    },
    {
      name: 'JavaScript',
      picture: sputnik
    },
    {
      name: 'JavaScript',
      picture: sputnik
    },
  ]
  return (
    <section id="skills" className="skills">
      <h3 className="skills__title">Скиллы</h3>
      <h2 className="skills__subtitle">Что я могу</h2>
      <div className="skills__container">
        {skills.map((item, index) => (
          <div key={index} className="skill">
            <img src={item.picture} alt="Skill icon" className="skill__image" />
            <p className="text">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
