
import React from "react";

import './Layout.scss';

import { CirclePhoto, Kumya, MovingText } from 'modules/components';
import { ReactComponent as FacebookLogo } from 'assets/svg/facebook.svg';
import { ReactComponent as InstagramLogo } from 'assets/svg/instagram.svg';
import { ReactComponent as TwitterLogo } from 'assets/svg/twitter.svg';
import { ReactComponent as GoogleMail } from 'assets/svg/google.svg';

export default class LandingPageLayout extends React.Component {

  render() {
    return (
      <main className="layout">
        <div className="photo">
          <CirclePhoto url="https://media.licdn.com/dms/image/C4E03AQGJ4nbfwP2bnA/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=swJFeQZ5ioWejeaHt-RtzP5b3oZqO56FJi2DDgkWFTU" />
        </div>
        <nav className="navigation">
          <Kumya text="About Me" hoverText="Who Me?" link="https://www.linkedin.com/in/jonah-grinage-105603158/" />
          <Kumya text="Projects" hoverText="Check It" link="https://github.com/jaygrinage" />
          <Kumya text="Contact Me" hoverText="Call Me" link="#" />
        </nav>
        <div>
          <MovingText />
        </div>
        <ul className="social">
          <li>
            <a
              href="https://www.facebook.com/jay.grinage"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FacebookLogo />
            </a>
          </li>
          <li>
            <a href="#" rel="noopener noreferrer" target="_blank">
              <InstagramLogo />
            </a>
          </li>
          <li>
            <a href="#" rel="noopener noreferrer" target="_blank">
              <TwitterLogo />
            </a>
          </li>
          <li>
            <a href="#">
              <GoogleMail />
            </a>
          </li>
        </ul>
      </main>
    );
  }
}
