// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from "react";

import styles from './Layout.module.scss';

import { css, jsx } from '@emotion/core';

export default class LandingPageLayout extends React.Component {

  render() {
    return (
     <div>
       Landing
     </div>
    );
  }
}
