
import React from "react";
import Tilt from "react-tilt";

import './Layout.scss';

import { CirclePhoto, Kumya, FlickerText, Card } from 'modules/components';
import { ReactComponent as FacebookLogo } from 'assets/svg/facebook.svg';
import { ReactComponent as InstagramLogo } from 'assets/svg/instagram.svg';
import { ReactComponent as TwitterLogo } from 'assets/svg/twitter.svg';
import { ReactComponent as GoogleMail } from 'assets/svg/google.svg';

import naruto1 from 'modules/anime/naruto-1.png';


 

export default () => {
  return (
    <Tilt
      className="Tilt"
      options={{
        reverse: true,  // reverse the tilt direction
        max: 1,     // max tilt rotation (degrees)
        perspective: 2000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,    // Speed of the enter/exit transition
      }}
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
            <Card
              image={naruto1}
              title="Anime Collector"
              text="Collect and Rate Anime"
            />
            <Card
              image={naruto1}
              title="Anime Collector"
              text="Collect and Rate Anime"
            />
            <Card
              image={naruto1}
              title="Anime Collector"
              text="Collect and Rate Anime"
            />
          </section>
      </main>
    </Tilt>
    );
}
