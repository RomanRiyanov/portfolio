import './Projects.scss'
import moodBeat from '../../assets/images/projects/moodbeat.png'
import instagram from '../../assets/images/projects/instagram.png'
import moviesSearch from '../../assets/images/projects/moviesSearch.png'
import travelRussia from '../../assets/images/projects/travelRussia.png'

export function Projects() {

  const skills = [
    {
      name: 'MoodBeat',
      picture: moodBeat
    },
    {
      name: 'Instagram',
      picture: instagram
    },
    {
      name: 'MoviesSearch',
      picture: moviesSearch
    },
    {
      name: 'TravelRussia',
      picture: travelRussia
    }
  ]
  return (
    <section id="projects" className="projects">
      <h3 className="projects__title">Проекты</h3>
      <h2 className="projects__subtitle">Что я уже сделал</h2>
      <div className="projects__container">
        {skills.map((item, index) => (
          <div key={index} className="project">
            <img src={item.picture} alt="Skill icon" className="project__image" />
            {/* <p className="text">{item.name}</p> */}
          </div>
        ))}
      </div>
    </section>
  )
}
