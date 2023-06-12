import './Skills.scss'
import sputnik from '../../assets/images/sputnik.svg'
import css from '../../assets/images/skills/css.svg'
import eslint from '../../assets/images/skills/eslint.svg'
import figma from '../../assets/images/skills/figma.svg'
import git from '../../assets/images/skills/git.svg'
import html from '../../assets/images/skills/html.svg'
import javascript from '../../assets/images/skills/javascript.svg'
import jest from '../../assets/images/skills/jest.svg'
import nodejs from '../../assets/images/skills/nodejs.svg'
import react from '../../assets/images/skills/react.svg'
import redux from '../../assets/images/skills/redux.svg'
import sass from '../../assets/images/skills/sass.svg'
import tailwind from '../../assets/images/skills/tailwind.svg'
import typescript from '../../assets/images/skills/typescript.svg'


export function Skills() {

  const skills = [
    {
      name: 'CSS',
      picture: css
    },
    {
      name: 'ESLint',
      picture: eslint
    },
    {
      name: 'Figma',
      picture: figma
    },
    {
      name: 'Git',
      picture: git
    },
    {
      name: 'HTML',
      picture: html
    },
    {
      name: 'JavaScript',
      picture: javascript
    },
    {
      name: 'Jest',
      picture: jest
    },
    {
      name: 'Node.js',
      picture: nodejs
    },
    {
      name: 'React',
      picture: react
    },
    {
      name: 'Redux Toolkit',
      picture: redux
    },
    {
      name: 'Sass/SCSS',
      picture: sass
    },
    {
      name: 'Tailwind',
      picture: tailwind
    },
    {
      name: 'TypeScript',
      picture: typescript
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
