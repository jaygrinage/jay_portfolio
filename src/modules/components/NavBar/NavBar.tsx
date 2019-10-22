
import React from "react";
import styles from './NavBar.module.scss';

export default class NavBar extends React.Component {

  render() {
    return (
      <div className={styles.navBar}>
        <ul>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  }
}
