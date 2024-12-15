import avatar from "../../assets/images/avatar.jpeg";
import "./About.scss";

export function About() {
  return (
    <section id="about" className="about">
      <article className="about-container">
        <h3 id="aboutsubtitle" className="about-title">
          <span>Обо мне</span>
        </h3>
        <h2 className="about-subtitle">Кто я такой</h2>
        <p className="text">
          Успешно работал авиационным инженером, но столкнулся с потолком для
          роста. Переквалифицировался в разработчика: фронтенд привлекает меня
          широким применением и осязаемыми результатами своей работы.
          <br />
          <br />
          Сейчас я разработчик в Газром ID, где я ответственный за всю ширину
          фронтенда на моем продукте - верстка, интеграция, устранение багов,
          код-ревью, рефакторинг. Стараюсь учиться новому в рамках своих задач и
          всегда делать чуть больше, чем требуется.
          <br />
          <br />
          Проходил стажировку в акселераторе Яндекса - вместе с командой мы
          разработали полноценнуя CRM для отслеживания выгорания сотрудников -
          MoodBeat.
          <br />
          Принимал участие в разработке сайта для Surfway Moscow. В основном
          занимался версткой страниц и компонентов, писал некрупный функционал
          на JS.
          <br />
          <br />
          Есть опыт как верстки небольших лендингов, так и создания полноценных
          SPA с реализованным фронт- и бэк-эндом.
          <br />
          <br />
          Заинтересовали мои навыки? Буду рад, если вы напишете мне по любому из
          указанных ниже&nbsp;
          <a className="about-link" href="#contacts">
            способов связи
          </a>
          , также вы можете скачать моё резюме&nbsp;
          <a
            className="about-link"
            target="_blank"
            href="https://github.com/RomanRiyanov/resume/blob/main/Frontend_CV_Roman_Riyanov.pdf"
          >
            по этой ссылке
          </a>
          .
        </p>
      </article>
      <article className="about-imageContainer">
        <img src={avatar} alt="Avatar" className="about-image" />
      </article>
    </section>
  );
}
