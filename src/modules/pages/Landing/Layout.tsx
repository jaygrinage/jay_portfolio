
import React, { useState } from "react";
import Tilt from "react-tilt";

import { useInterval } from 'modules/utils';

import './Layout.scss';

import { Mousey, Card } from 'modules/components';
import { ReactComponent as Linkedin } from 'assets/svg/linkedin2.svg';
import { ReactComponent as Github } from 'assets/svg/github.svg';
import { ReactComponent as GoogleMail } from 'assets/svg/google.svg';
import { ReactComponent as Droplet } from 'assets/svg/droplet.svg';


const greetingsArray = ['Hello', 'Ndewo', 'Bonjour', 'Hola', 'Nǐ hǎo', 'Ciao', 'Anyoung', 'Konnichiwa', 'Privet', 'Mholo',
  'Pẹlẹ o', 'Guten Tag', 'Asalaam alaikum', 'Shalom'];


export default () => {

<<<<<<< HEAD
    const clicky = () => {
      console.log("clicking")
    }

    return (
      <Tilt
        className="Tilt"
        options={{ max: 5 }}
        // style={{ height: 250, width: 250 }}
      >
        <main className="layout">
          {/* <FlickerText lightText='Jonah' dimText='Grinage' /> */}
          <section className="intro">
            <FlickerText text="Jonah Grinage" />
            <FlickerText className="titleSub" text="Full-Stack Developer" />
          </section>
          <section className="about-me">
            <h1>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis sint eius at dicta minus? Iusto, itaque recusandae
              perferendis vero atque amet porro in culpa incidunt ducimus. Non
              tenetur velit nihil?
            </h1>
          </section>
          <section className="projects">
=======
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const [reversed, setReversed] = useState(false);

  const primaryColor = reversed ? 'rgb(253, 203, 64)' : 'rgb(51, 51, 51)';
  const secondaryColor = reversed ? 'rgb(51, 51, 51)' : 'rgb(253, 203, 64)';
  document.documentElement.style.setProperty('--color-primary', secondaryColor);
  document.documentElement.style.setProperty('--color-secondary', primaryColor);

  useInterval(() => {
    setCurrentGreetingIndex(currentGreetingIndex + 1);
  }, 2000);


  if (currentGreetingIndex === greetingsArray.length) {
    setCurrentGreetingIndex(0);
  }

  return (
    <main className="layout">
      <nav className="navbar">
        <ul className="social">
          <li><a href='#' target='_blank'><Linkedin /></a></li>
          <li><a href='#' target='_blank'><Github /></a></li>
          <li><a href='href="mailto:jonahgrinage.dev@gmail.com"' target='_blank'><GoogleMail /></a></li>
          <li onClick={() => setReversed(!reversed)} style={{cursor: 'pointer'}}><Droplet /></li>
        </ul>
        {/* <span>Click Here →</span> */}
      </nav>
      <aside className="sidebar">
        {/* animate the transition */}

        {/* banner nav */}
        <h2 className="sidebar__header">About Me</h2>
        {/* projects nav */}
        <h2 className="sidebar__header">Projects</h2>
      </aside>
      <aside className="content">
        <section className="banner">
          <Tilt
            className="banner__heading"
            options={{
              reverse: true,  // reverse the tilt direction
              max: 15,     // max tilt rotation (degrees)
              perspective: 2000,   // Transform perspective, the lower the more extreme the tilt gets.
              scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
              speed: 300,    // Speed of the enter/exit transition
              transition: true,   // Set a transition on enter/exit.
              axis: null,   // What axis should be disabled. Can be X or Y.
              reset: true,    // If the tilt effect has to be reset on exit.
              easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
            }}>
            <div>
              <h2>{greetingsArray[currentGreetingIndex]},</h2>
              <h1>I'm Jonah</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nihil doloribus velit asperiores aspernatur deleniti veritatis! Nemo sequi enim perferendis dignissimos illum, laboriosam ipsam porro nam voluptatum consectetur assumenda fugiat.</p>
            <h3>Developer ∙ Designer ∙ Gamer</h3>
          </Tilt>
          <Mousey />
        </section>
        <section className="projects">
          <div className='projects__list'>
>>>>>>> 152f8f8ff4f5633b6632cd41e751529bad731587
            <Card
              header='project 1'
              caption='project 1'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nihil doloribus velit asperiores aspernatur deleniti veritatis! Nemo sequi enim perferendis dignissimos illum'
              img='https://vignette.wikia.nocookie.net/witcher/images/9/98/Netflix_The_Witcher_Jaskier.png/revision/latest?cb=20191221171629'
            />


            <Card
              header='project 1'
              caption='project 1'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nihil doloribus velit asperiores aspernatur deleniti veritatis! Nemo sequi enim perferendis dignissimos illum'
              img='https://vignette.wikia.nocookie.net/witcher/images/9/98/Netflix_The_Witcher_Jaskier.png/revision/latest?cb=20191221171629'
            />


            <Card
              header='project 1'
              caption='project 1'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nihil doloribus velit asperiores aspernatur deleniti veritatis! Nemo sequi enim perferendis dignissimos illum'
              img='https://vignette.wikia.nocookie.net/witcher/images/9/98/Netflix_The_Witcher_Jaskier.png/revision/latest?cb=20191221171629'
            />


            <Card
              header='project 1'
              caption='project 1'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nihil doloribus velit asperiores aspernatur deleniti veritatis! Nemo sequi enim perferendis dignissimos illum'
              img='https://vignette.wikia.nocookie.net/witcher/images/9/98/Netflix_The_Witcher_Jaskier.png/revision/latest?cb=20191221171629'
            />
          </div>
        </section>
      </aside>
    </main>
  );
}
