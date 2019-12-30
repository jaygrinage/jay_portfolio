
import React from "react";
import Tilt from "react-tilt";

import './Layout.scss';

import { CirclePhoto, Kumya, FlickerText } from 'modules/components';
import { ReactComponent as FacebookLogo } from 'assets/svg/facebook.svg';
import { ReactComponent as InstagramLogo } from 'assets/svg/instagram.svg';
import { ReactComponent as TwitterLogo } from 'assets/svg/twitter.svg';
import { ReactComponent as GoogleMail } from 'assets/svg/google.svg';


 

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
            About Me
          </section>
          <section className="projects">
              Projects
          </section>
      </main>
    </Tilt>
    );
}
