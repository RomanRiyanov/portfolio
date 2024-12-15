import { JSX, useRef } from 'react'
import './Projects.scss'
import moodBeat from '../../assets/images/projects/moodbeat.png'
import instagram from '../../assets/images/projects/instagram.png'
import moviesSearch from '../../assets/images/projects/moviesSearch.png'
import travelRussia from '../../assets/images/projects/travelRussia.png'
import wonders from '../../assets/images/projects/wonders.png'
import calculator from '../../assets/images/projects/calculator.png'

export interface Project {
  name: string,
  picture: string,
  intro: string,
  description: string,
  stack: string,
  link?: string,
}

const projects = [
  {
    name: 'MoodBeat',
    picture: moodBeat,
    intro: 'Сервис по отслеживанию выгорания сотрудников',
    description: `Проект в данный момент реализуется в ходе стажировки в Яндекс Акселераторе.
    Работа над приложением происходит в составе команды из ~20 человек: PM, UX/UI, front-end, back-end, QA. Результат работ проходит регулярную защиту через презентации с заказчиком.
    Координация задач через GitHub Projects, репозитории скомпонованы с помощью Git Submodules. Функционал задеплоен не в полном объеме и постоянно дополняется.

    Проект предназначен для организаций, и регистрация происходит по ссылке-приглашению от HR на почту. Поэтому для того, чтобы ознакомиться с некоторыми возможностями платформы,
    можно воспользоваться mock-пользователем и в форме авторизации ввести:

    email: employee1@example.com,
    password: EmployeeTestPass123`,
    stack: 'Vite, TypeScript, CSS Modules / SCSS, Redux Toolkit, Axios, WebSocket, StoryBook, ESLint, Stylelint',
  },
  {
    name: 'Mesto',
    picture: instagram,
    intro: 'Одностраничный сайт SPA',
    description: `Аналог Instagram, платформа для взаимодействия с изображениями. Выполнены фронтенд и бэкенд части приложения со следующими возможностями:\n
         - регистрация и авторизация пользователя
         - редактирование профиля
         - добавление/удаление карточки
         - постановка и снятие лайка
         - сохранение данных на сервере`,
    stack: 'JS, React, Express.js, MongoDB, ESLint, Webpack, Git',
    link: 'https://romanriyanov.github.io/react-mesto-auth',
  },
  {
    name: 'Seven Wonders',
    picture: wonders,
    intro: 'Бесконечный слайдер',
    description: `Работа, сделанная с целью реализовать слайдер для изображений без использования готовых библиотек.
      Были использованы возможности TS и RTK, настроен роутинг между главной страницей и страницей с показом набора карточек. Добавлена возможность ставить лайки карточкам и сохранять состояние при навигации по сайту. Проект линтирован с помощью ESLint.`,
    stack: 'TypeScript, React, Redux Toolkit, ESLint',
    link: 'https://infinite-slider.netlify.app',
  },
  {
    name: 'MoviesSearch',
    picture: moviesSearch,
    intro: 'Одностраничный сайт SPA',
    description: `Сервис по поиску фильмов, выполнены клиентская и серверная части, реализован адаптив сайта под разные устройства. Доступный функционал:\n
      - отображение разных элементов на страницах в зависимости от аутентификации пользователя
      - защита роутов от неавторизованных пользователей
      - запрос на стороннюю базу данных и отображение фильмов на странице по ключевому слову
      - отправка фильмов на сервер по клику на кнопку "Сохранить" и отображение на странице "Сохранённые"
      - сохранение состояния поиска и jwt-токена аутентификации в LocalStorage
      - редактирование профиля
      - валидация форм`,
    stack: 'JS, React, Express.js, MongoDB, ESLint, Webpack, Git, Formik, Joi, Celebrate',
  },
  {
    name: 'Drag-n-Drop Calculator',
    picture: calculator,
    intro: 'Сборный калькулятор',
    description: `Проект для демонстрации технологии drag-n-drop, использована библиотека react-beautiful-dnd. Экран калькулятора вы можете перенести только в верхнюю область конструктора. Кодовая база написана на TypeScript, в store RTK хранится состояние runtime/constructor и выполняются все математические рассчеты. В стилях используется препроцессор SCSS и библиотека classnames.`,
    stack: 'TypeScript, React, Redux Toolkit, ESLint, SCSS',
    link: 'https://drag-n-drop-calc.netlify.app/',
  },
  {
    name: 'TravelRussia',
    picture: travelRussia,
    intro: 'Сайт - лендинг',
    description: 'Пример простого демонстрационного одностраничника. Дизайн взят из макета в программе Figma, вёрстка - PixelPerfect. Чередование флексбокса, грид-сетки и нежёсткого задания размеров позволяет подстраивать сайт под различные устройства. С помощью @media запросов отделены брейпойнты отображения.',
    stack: 'JavaScript, HTML, CSS, Flexbox Layout, Grid Layout, Adaptive Design',
    link: 'https://romanriyanov.github.io/russian-travel-look/index.html',
  }
]

interface ProjectsProps {
  handleOpenProject: (project: Project) => void,
}

export function Projects({handleOpenProject}: ProjectsProps): JSX.Element {

  const ref = useRef(null);

  function openPopup(item: Project) {
    handleOpenProject(item);
  }

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
    </section>
  )
}
