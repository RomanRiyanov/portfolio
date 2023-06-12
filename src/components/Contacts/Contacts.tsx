import './Contacts.scss'
import cv from '../../assets/contacts/cv.svg'
import telegram from '../../assets/contacts/telegram.svg'
import linkedin from '../../assets/contacts/linkedin.svg'
import github from '../../assets/contacts/github.svg'

export function Contacts() {

  const skills = [
    {
      cv: 'CV',
      picture: cv
    },
    {
      picture: telegram
    },
    {
      picture: linkedin
    },
    {
      picture: github
    }
  ]
  return (
    <section id="contacts" className="contacts">
      <h3 className="contacts__title">Контакты</h3>
      <h2 className="contacts__subtitle">Как со мной можно связаться</h2>
      <div className="contacts__container">
        {skills.map((item, index) => (
          <div key={index} className="contact">
            {item.cv ?
              <p className="contacts__title">{item.cv}</p> :
              <img src={item.picture} alt="Contact icon" className="contact__image" />
            }
          </div>
        ))}
      </div>

    </section>
  )
}
