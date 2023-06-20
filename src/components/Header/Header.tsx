import { useState } from 'react'
import {ToolMenuPopup} from '../ToolMenuPopup/ToolMenuPopup'
import './Header.scss'

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpenPopup () {
    setIsOpen(true)
    console.log('open')
  }

  function handleClosePopup () {
    setIsOpen(false)
  }

  return (
    <nav id="header" className="header">
      <article className="language">
        <button className="k">RU</button>
        <button className="k">EN</button>
      </article>
      <ul className="navbar">
        <li><a href="#main" className="navbar-element active">ДОМАШНЯЯ</a></li>
        <li><a href="#about" className="navbar-element">ОБО МНЕ</a></li>
        <li><a href="#skills" className="navbar-element">СКИЛЛЫ</a></li>
        <li><a href="#projects" className="navbar-element">ПРОЕКТЫ</a></li>
        <li><a href="#contacts" className="navbar-element">КОНТАКТЫ</a></li>
      </ul>
      <div className="progress"></div>

      <button type='button' onClick={handleOpenPopup} className="button-tool-popup"/>
      <ToolMenuPopup isOpen={isOpen} onClose={handleClosePopup}/>
    </nav>
  )
}
