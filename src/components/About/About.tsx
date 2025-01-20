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
          своим широким применением и осязаемыми результатами труда.
          <br />
          <br />
          Сейчас я работаю в Газпром ID, где отвечаю за весь фронтенд моего
          продукта — от верстки до интеграции, устранения багов, проведения
          код-ревью и рефакторинга. Стараюсь постоянно учиться новому в рамках
          своих задач и всегда делаю чуть больше, чем требуется.
          <br />
          <br />
          Пройдя стажировку в акселераторе Яндекса, вместе с командой разработал
          полноценную CRM-систему для отслеживания выгорания сотрудников —
          MoodBeat.
          <br />
          Также участвовал в создании сайта для Surfway Moscow, где занимался в
          основном версткой страниц и компонентов, а также писал небольшой
          функционал на JavaScript.
          <br />
          <br />
          Имею опыт как в верстке небольших лендингов, так и в создании
          полноценных SPA с реализованными фронт- и бэк-эндами.
          <br />
          <br />
          Заинтересовал мой опыт? Буду рад, если вы свяжетесь со мной любым
          удобным&nbsp;
          <a className="about-link" href="#contacts">
            способом
          </a>
          , указанным ниже. Также вы можете скачать моё резюме&nbsp;
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
