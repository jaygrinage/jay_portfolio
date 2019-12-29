
import React from "react";

import './Layout.scss';

import { CirclePhoto, Kumya, FlickerText } from 'modules/components';
import { ReactComponent as FacebookLogo } from 'assets/svg/facebook.svg';
import { ReactComponent as InstagramLogo } from 'assets/svg/instagram.svg';
import { ReactComponent as TwitterLogo } from 'assets/svg/twitter.svg';
import { ReactComponent as GoogleMail } from 'assets/svg/google.svg';
import Tilt from "react-tilt";


 

export default () => {
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
          </section>
          <section className="projects">
              
          </section>
        </main>
      </Tilt>
    );
}
