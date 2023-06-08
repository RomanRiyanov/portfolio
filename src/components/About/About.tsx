import sputnik from '../../assets/images/sputnik.svg'
import './About.scss'

export function About() {

  return (
    <section id="about" className="about">
      <article className="about__container">
        <h3 className="about__title">Обо мне</h3>
        <h2 className="about__subtitle">Кто я такой</h2>
        <p className="text">
          Может показаться, что некоторые теги подходят для того, чтобы сделать страницу покрасивее,
          подвигать текст или добавить ему интервалов. Но то, что браузер по умолчанию отображает теги
          как-то, как вам нужно, не значит, что это нужно использовать. Посмотрим на пример.
        </p>
      </article>
      <article className="image__container">
          <img src={sputnik} alt="" className="image" />
      </article>
    </section>
  )
}
