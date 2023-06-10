import './Contacts.scss'
import sputnik from '../../assets/images/sputnik.svg'

export function Contacts() {

  const skills = [
    {
      name: 'JavaScript',
      picture: sputnik
    },
    {
      name: 'JavaScript',
      picture: sputnik
    },
    {
      name: 'JavaScript',
      picture: sputnik
    },
    {
      name: 'JavaScript',
      picture: sputnik
    }
  ]
  return (
    <section id="contacts" className="contacts">
      <h3 className="contacts__title">Контакты</h3>
      <h2 className="contacts__subtitle">Как со мной можно связаться</h2>
      <div className="contacts__container">
        {skills.map((item, index) => (
          <div key={index} className="contact">
            <img src={item.picture} alt="Contact icon" className="contact__image" />
          </div>
        ))}
      </div>

    </section>
  )
}
