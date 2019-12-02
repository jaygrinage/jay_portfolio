
import React from "react";

import styles from './Layout.module.scss';

import { CirclePhoto } from 'modules/components';

export default class LandingPageLayout extends React.Component {

  render() {
    return (
     <main className={styles.layout}>
        <CirclePhoto url="https://vignette.wikia.nocookie.net/gameofthrones/images/d/d0/JonSnow8x06.PNG/revision/latest?cb=20190714094440" />
     </main>
    );
  }
}
