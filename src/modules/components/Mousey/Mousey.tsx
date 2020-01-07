import React from "react";
import styles from "./Mousey.module.scss";

const Mousey = () => {
  return (
    <div className={styles.mousey}>
      <div className={styles.scroller}></div>
    </div>
  );
};

export default Mousey;
