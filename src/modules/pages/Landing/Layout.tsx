
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
          <li>
            <a
              href="https://www.linkedin.com/in/jonah-grinage-105603158/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/jaygrinage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </li>
          <li>
            <a href="mailto:jonahgrinage.dev@gmail.com">
              <GoogleMail />
            </a>
          </li>
          <li
            onClick={() => setReversed(!reversed)}
            style={{ cursor: "pointer" }}
          >
            <Droplet />
          </li>
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
              reverse: true, // reverse the tilt direction
              max: 15, // max tilt rotation (degrees)
              perspective: 2000, // Transform perspective, the lower the more extreme the tilt gets.
              scale: 1, // 2 = 200%, 1.5 = 150%, etc..
              speed: 300, // Speed of the enter/exit transition
              transition: true, // Set a transition on enter/exit.
              axis: null, // What axis should be disabled. Can be X or Y.
              reset: true, // If the tilt effect has to be reset on exit.
              easing: "cubic-bezier(.03,.98,.52,.99)" // Easing on enter/exit.
            }}
          >
            <div>
              <h2>{greetingsArray[currentGreetingIndex]},</h2>
              <h1>I'm Jonah</h1>
            </div>
            <p>
              Game of thrones season 8 never happened. Now that I have your
              attention, unfortunatly it did happen. As you can tell I am a GOT
              fan amongst other thing. I'm a gamer, anime lover, basketball fan,
              writer but' above all I'm a developer. Technology has always
              facinated me for as long as I can remember. So it was only natural
              that I wanted to pursue it, and become a part of this world. I
              sometimes tell people, "If someone can pay my bills and give me
              food, I'd code for free". I feel that way because this never feels
              like work to me. It's my joy, my passion and my way of life, and I
              hope to share that with everyone.
            </p>
            <h3>Developer ∙ Designer ∙ Gamer</h3>
          </Tilt>
          <Mousey />
        </section>
        <section className="projects">
          <div className="projects__list">
            <Card
              header="Anime Collector"
              caption=""
              text="Anime Collector is an application for anime fans everywhere. Look up all your favorite anime, then rate and comment on them to share with others"
              img="https://wallpaperaccess.com/full/39033.png"
              link="https://jaygrinage.github.io/anime-collector/"
            />
            <Card
              header="Hang Man"
              caption=""
              text="A twist on the classic Hang Man game. Here you are given a picture clue, and you have to use the picture to guess the word."
              img="https://images.unsplash.com/photo-1499537233661-da4ca50391f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              link="#"
            />

            <Card
              header="Color Game"
              caption=""
              text="How good are you at telling what a color is just by looking at the RGB? The Color Game lets you test your skills, and with 2 dificulty levels there is something for everyone."
              img="https://images.unsplash.com/photo-1519145897500-869c40ccb024?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
              link="https://jaygrinage.github.io/colorGame/"
            />

            <Card
              header="Coming Soon"
              caption=""
              text="Check back soon!"
              img="https://images.unsplash.com/photo-1484069560501-87d72b0c3669?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
              link="#"
            />
          </div>
        </section>
      </aside>
    </main>
  );
}
