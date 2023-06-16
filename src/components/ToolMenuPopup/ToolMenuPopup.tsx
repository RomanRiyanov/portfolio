import { JSX, useRef } from "react"
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import './ToolMenuPopup.scss'

interface ToolMenuPopupProps {
  isOpen: boolean,
  onClose: () => void
}

export function ToolMenuPopup ({isOpen, onClose}: ToolMenuPopupProps): JSX.Element {

  const ref = useRef(null);

  function handleCloseButton() {
      onClose();
  }

  useEscapeKey(onClose);
  useOutsideClick(onClose, ref);

  return (
    <section className={`tool-menu-popup ${isOpen && 'tool-menu-popup-viewable'}`}>
        <div ref={ref} className='tool-menu-popup-window'>
          <button type="button" onClick={handleCloseButton} className='button-close-tool-popup'></button>
          <ul className="navbar-vertical">
            <li><a href="#main" className="navbar-element active">ДОМАШНЯЯ</a></li>
            <li><a href="#about" className="navbar-element">ОБО МНЕ</a></li>
            <li><a href="#skills" className="navbar-element">СКИЛЛЫ</a></li>
            <li><a href="#projects" className="navbar-element">ПРОЕКТЫ</a></li>
            <li><a href="#contacts" className="navbar-element">КОНТАКТЫ</a></li>
          </ul>
        </div>
    </section>
  );
}
