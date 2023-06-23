import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { About } from '../About/About'
import { Skills } from '../Skills/Skills'
import { Projects } from '../Projects/Projects'
import { Contacts } from '../Contacts/Contacts'

import './App.scss'
import React, { useEffect } from 'react'

export function App() {


  useEffect(() => {

    // функционал передвижения спутника

    const mouseOverContainer = document.getElementById("main");
    const picture = document.getElementById("picture");

    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    if (picture) picture.onmousedown = dragMouseDown;

    function dragMouseDown(e: MouseEvent) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmousemove = elementDrag;
        document.onmouseup = closeDragElement;
      }

    function elementDrag(this: GlobalEventHandlers, e: MouseEvent) {
      e.preventDefault();
      const target = e.target as HTMLImageElement;
      // высчитать новое положение курсора
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // выставить новое положение элементу
      if(target === picture) {
        target.style.top = (target.offsetTop - pos2) + "px";
        target.style.left = (target.offsetLeft - pos1) + "px";
      }
    }

    function closeDragElement() {
      // перестать движение когда кнопка отжата и спутник отпущен
      document.onmouseup = null;
      document.onmousemove = null;
    }

    // функционал вращения спутника относительно движения курсора

    function transforms(x: number, y: number, element: HTMLElement) {
      const box = element.getBoundingClientRect();
      const calcX = -(y - box.y - (box.height)) / 50;
      const calcY = (x - box.x - (box.width)) / 50;

      return "perspective(100px) "
        + "   rotateX("+ calcX +"deg) "
        + "   rotateY("+ calcY +"deg) ";
    }

    function transformElement(element: HTMLElement, [x, y, position]: [number, number, HTMLElement]) {
      element.style.transform  = transforms.apply(null, [x, y, position]);
    }

    if (mouseOverContainer) mouseOverContainer.onmousemove = function(e) {
      if (picture) {
        const position: [number, number, HTMLElement] = [e.clientX, e.clientY, picture];

        window.requestAnimationFrame(function(){
          transformElement(picture, position);
        });
      }
    };


    // функционал изменения цвета навигационных ссылкок в заголовке

    const sections = document.querySelectorAll('section');
    const navLink = document.querySelectorAll('nav a');
    const header = document.getElementById('header')

    const subtitles = document.querySelectorAll('h3');
    window.onscroll = () => {

      navLink.forEach(link => {
        link.classList.remove('active');
      })

      const top = window.scrollY;
      if (top > 0) {
        header?.classList.add('scrolling');
      }
      if (top === 0) {
        header?.classList.remove('scrolling');
      }

      subtitles.forEach(subtitle => {
        const offset = subtitle.offsetTop;
        const height = subtitle.offsetHeight;
        const id = subtitle.getAttribute('id');
        // if (top > offset && top < offset + height) {
          if (top < offset + 500) {
          // subtitle.classList.add('animate');
          // document.querySelector('h3[id*='+id+']')?.classList.add('animate');
          subtitle?.classList.add('animate');
          // document.getElementById(id)?.classList.add('animate');

        }
      })

      sections.forEach(section => {
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





      // document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));



    }
  }, [])

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
