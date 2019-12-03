
import React from "react";

import './Layout.scss';

import { CirclePhoto, Kumya } from 'modules/components';

export default class LandingPageLayout extends React.Component {

  render() {
    return (
     <main className="layout">
        <CirclePhoto url="https://vignette.wikia.nocookie.net/gameofthrones/images/d/d0/JonSnow8x06.PNG/revision/latest?cb=20190714094440" />
        <nav className="navigation">
          <Kumya text="About Me" link="#" />
          <Kumya text="Projects" link="#" />
          <Kumya text="Contact Me" link="#" />
        </nav>
     </main>
    );
  }
}
