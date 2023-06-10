import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { About } from '../About/About'
import { Skills } from '../Skills/Skills'
import { Projects } from '../Projects/Projects'
import { Contacts } from '../Contacts/Contacts'

import './App.scss'

export function App() {

  const sections = document.querySelectorAll('section');
  const navLink = document.querySelectorAll('nav a');
  const header = document.getElementById('header')
  window.onscroll = () => {

    const top = window.scrollY;
    if (top > 0) {
      header?.classList.add('scrolling');
    }
    if (top === 0) {
      header?.classList.remove('scrolling');
    }

    sections.forEach(section => {
      const top = window.scrollY;
      const offset = section.offsetTop - 150;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (top > offset && top < offset + height) {
        navLink.forEach(link => {
          link.classList.remove('active');
          document.querySelector('nav a[href*='+id+']')?.classList.add('active');
        })
      }
    })
  }

  return (
    <main className='page'>
      <Header/>
      <Main/>
      <About />
      <Skills />
      <Projects />
      <Contacts/>
    </main>
  )
}
