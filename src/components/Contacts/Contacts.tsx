import './Contacts.scss'
import cv from '../../assets/contacts/cv.svg'
import telegram from '../../assets/contacts/telegram.svg'
import linkedin from '../../assets/contacts/linkedin.svg'
import github from '../../assets/contacts/github.svg'

export function Contacts() {

  const skills = [
    {
      cv: 'CV',
      picture: cv,
      link: 'https://github.com/RomanRiyanov/resume/blob/main/Frontend_developer_resume_Roman_Riyanov.pdf',
    },
    {
      picture: telegram,
      link: 'https://t.me/yezgo'
    },
    {
      picture: linkedin,
      link: 'https://www.linkedin.com/in/roman-riyanov/'
    },
    {
      picture: github,
      link: 'https://github.com/RomanRiyanov'
    }
  ]
  return (
    <section id="contacts" className="contacts">
      <h3 className="contacts__title">Контакты</h3>
      <h2 className="contacts__subtitle">Как со мной можно связаться</h2>
      <div className="contacts__container">
        {skills.map((item, index) => (
          <a href={item.link} target='_blank' key={index} className="contact">
            {item.cv ?
              <p className="contacts__cv">{item.cv}</p> :
              <img src={item.picture} alt="Contact icon" className="contact__image" />
            }
          </a>
        ))}
      </div>

    </section>
  )
}