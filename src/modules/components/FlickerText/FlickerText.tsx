import React from "react";
import styles from "./FlickerText.module.scss";

const FlickerText = ({ text, flicker }: any)=> {

    return (
      <div className={styles.wrapper}>
        <h1 className={flicker ? styles.flicker : styles.noFlicker } data-heading={text}>
          {text}
        </h1>
      </div>
    );
}

export default FlickerText;