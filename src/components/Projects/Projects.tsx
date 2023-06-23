import { useState, useRef } from 'react'
import { useEscapeKey } from '../../hooks/useEscapeKey'
import { useOutsideClick } from '../../hooks/useOutsideClick'
import './Projects.scss'
import moodBeat from '../../assets/images/projects/moodbeat.png'
import instagram from '../../assets/images/projects/instagram.png'
import moviesSearch from '../../assets/images/projects/moviesSearch.png'
import travelRussia from '../../assets/images/projects/travelRussia.png'

interface Project {
  name: string,
  picture: string
}

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

export function Projects() {

  const [isOpen, setOpen] = useState<boolean>(false)
  const [project, setProject] = useState<Project>();

  const ref = useRef(null);

  function openPopup(item: Project) {
    if (!isOpen) {
      setProject(item);
      setOpen(true)
      console.log('open')
    }
  }

  function closePopup() {
    setOpen(false)
  }

  useEscapeKey(closePopup);
  useOutsideClick(closePopup, ref);

  return (
    <section id="projects" className="projects">
      <h3 id="projectssubtitle" className="projects-title">Проекты</h3>
      <h2 className="projects-subtitle">Что я уже сделал</h2>
      <div ref={ref} className="projects-container">
        {skills.map((item, index) => (
          <div key={index} onClick={() => openPopup(item)} className="project">
            <img src={item.picture} alt="Skill icon" className="project-image" />
          </div>
        ))}
      </div>
      <div ref={ref} className={`popup ${isOpen ? 'popup-viewable': ''}`}>
        {project?.name}
        <button type="button" onClick={closePopup} className='button-close-tool-popup'></button>
      </div>
    </section>
  )
}
