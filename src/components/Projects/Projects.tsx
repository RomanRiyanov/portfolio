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
  picture: string,
  intro: string,
  description: string,
  stack: string,
  link: string,
}

const projects = [
  {
    name: 'MoodBeat',
    picture: moodBeat,
    intro: 'Произвольныйтекст',
    description: 'ПроизвольныйтекстПроизволПроизвольныйтекстьныйтекстПроизвольныйтекстПроизвольныйтекст',
    stack: 'ПроизвольныйтекстПроизвольныйтекст',
    link: 'https://mood-beap.netlify.app',
  },
  {
    name: 'Mesto',
    picture: instagram,
    intro: 'Произвольныйтекст',
    description: 'ПроизвольныйтекстПроизволПроизвольныйтекстьныйтекстПроизвольныйтекстПроизвольныйтекст',
    stack: 'ПроизвольныйтекстПроизвольныйтекст',
    link: 'https://romanriyanov.github.io/react-mesto-auth',
  },
  {
    name: 'MoviesSearch',
    picture: moviesSearch,
    intro: 'Произвольныйтекст',
    description: 'ПроизвольныйтекстПроизволПроизвольныйтекстьныйтекстПроизвольныйтекстПроизвольныйтекст ПроизвольныйтекстПроизволПроизвольныйтекстьныйтекстПроизвольныйтекстПроизвольныйтекст',
    stack: 'ПроизвольныйтекстПроизвольныйтекст',
    link: 'https://roman.diploma.nomoredomains.icu',
  },
  {
    name: 'TravelRussia',
    picture: travelRussia,
    intro: 'Произвольныйтекст',
    description: 'ПроизвольныйтекстПроизволПроизвольныйтекстьныйтекстПроизвольныйтекстПроизвольныйтекст',
    stack: 'ПроизвольныйтекстПроизвольныйтекст',
    link: 'https://romanriyanov.github.io/russian-travel-look/index.html',
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
      <h3 id="projectssubtitle" className="projects-title"><span>Проекты</span></h3>
      <h2 className="projects-subtitle">Что я уже сделал</h2>
      <div ref={ref} className="projects-container">
        {projects.map((item, index) => (
          <div key={index} onClick={() => openPopup(item)} className="project">
            <img src={item.picture} alt="Skill icon" className="project-image" />
          </div>
        ))}
      </div>
      <div ref={ref} className={`popup ${isOpen ? 'popup-viewable': ''}`}>
        <h4 className='popup-title'><span>{project?.name}</span></h4>
        <p className='popup-intro'>{project?.intro}</p>
        <p className='popup-description'>{project?.description}</p>
        <p className='popup-stack'><strong>Стек:</strong> {project?.stack}</p>
        <a className='popup-link' href={project?.link} target='_blank'>Открыть проект</a>
        <button type="button" onClick={closePopup} className='button-close-tool-popup'></button>
      </div>
    </section>
  )
}
