import { JSX, useRef } from "react"
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { Project } from "../Projects/Projects";
import './ProjectPopup.scss'

interface ProjectPopupProps {
  isOpen: boolean,
  onClose: () => void,
  project: Project | null
}

export function ProjectPopup ({isOpen, onClose, project}: ProjectPopupProps): JSX.Element {

  const ref = useRef(null);

  function handleCloseButton() {
    onClose();
  }

  useEscapeKey(onClose);
  useOutsideClick(onClose, ref);

  return (
    <article className={`project-popup ${isOpen && 'project-popup-viewable'}`}>
      <div ref={ref} className='project-popup-window'>
        <h4 className='project-popup-title'><span>{project?.name}</span></h4>
        <p className='project-popup-intro'>{project?.intro}</p>
        <p className='project-popup-description'>{project?.description}</p>
        <p className='project-popup-stack'><strong>Стек:</strong> {project?.stack}</p>
        {project?.link && <a className='project-popup-link' href={project?.link} target='_blank'>Открыть проект</a>}
        <button type="button" onClick={handleCloseButton} className='button-close-tool-popup'></button>
      </div>
    </article>
  );
}


