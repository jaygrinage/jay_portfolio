
import React from "react";

import './Layout.scss';

import { CirclePhoto, Kumya } from 'modules/components';
import { ReactComponent as FacebookLogo } from 'assets/svg/facebook.svg';
import { ReactComponent as InstagramLogo } from 'assets/svg/instagram.svg';
import { ReactComponent as TwitterLogo } from 'assets/svg/twitter.svg';
import { ReactComponent as GoogleMail } from 'assets/svg/google.svg';

export default class LandingPageLayout extends React.Component {

  render() {
    return (
     <main className="layout">
       <div className="photo">
          <CirclePhoto url="https://vignette.wikia.nocookie.net/gameofthrones/images/d/d0/JonSnow8x06.PNG/revision/latest?cb=20190714094440" />
       </div>
        <nav className="navigation">
          <Kumya text="About Me" hoverText="Who Me?" link="#" />
          <Kumya text="Projects" hoverText="Check It" link="#" />
          <Kumya text="Contact Me" hoverText="Call Me" link="#" />
        </nav>
        <ul className="social">
          <li><a href="#" rel="noopener noreferrer" target="_blank"><FacebookLogo /></a></li>
          <li><a href="#" rel="noopener noreferrer" target="_blank"><InstagramLogo /></a></li>
          <li><a href="#" rel="noopener noreferrer" target="_blank"><TwitterLogo /></a></li>
          <li><a href="#"><GoogleMail /></a></li>
        </ul>
     </main>
    );
  }
}
