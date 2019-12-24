
import React from "react";

import './Layout.scss';

import { CirclePhoto, Kumya, FlickerText } from 'modules/components';
import { ReactComponent as FacebookLogo } from 'assets/svg/facebook.svg';
import { ReactComponent as InstagramLogo } from 'assets/svg/instagram.svg';
import { ReactComponent as TwitterLogo } from 'assets/svg/twitter.svg';
import { ReactComponent as GoogleMail } from 'assets/svg/google.svg';

export default class LandingPageLayout extends React.Component {

  render() {
    return (
      <main className="layout">
        {/* <FlickerText lightText='Jonah' dimText='Grinage' /> */}
        <section className="banner">
          Jonah Grinage
          <FlickerText text="Jonah Grinage" />
        </section>
        <section className="about-me">

        </section>
      </main>
    );
  }
}
