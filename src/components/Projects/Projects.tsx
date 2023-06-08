import './Projects.scss'
import sputnik from '../../assets/images/sputnik.svg'

export function Projects() {

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
    }
  ]
  return (
    <section id="projects" className="projects">
      <h3 className="projects__title">Проекты</h3>
      <h2 className="projects__subtitle">Что я уже сделал</h2>
      <div className="projects__container">
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
