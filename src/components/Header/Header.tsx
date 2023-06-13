import { useState } from 'react'

import './Header.scss'

export function Header() {

  return (
    <nav id="header" className="header">
      <article className="language">
        <button className="k">RU</button>
        <button className="k">EN</button>
      </article>
      <ul className="navbar">
        <li><a href="#main" className="navbar__element active">ДОМАШНЯЯ</a></li>
        <li><a href="#about" className="navbar__element">ОБО МНЕ</a></li>
        <li><a href="#skills" className="navbar__element">СКИЛЛЫ</a></li>
        <li><a href="#projects" className="navbar__element">ПРОЕКТЫ</a></li>
        <li><a href="#contacts" className="navbar__element">КОНТАКТЫ</a></li>
      </ul>
    </nav>
  )
}
