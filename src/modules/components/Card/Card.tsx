import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
    image: string,
    title: string,
    text: string
}

const Card: React.FC<CardProps> = ({ image, title, text }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="Avatar" className={styles.image} />
      <div className={styles.container}>
        <h4>
          <b> {title} </b>
        </h4>
        <p> {text} </p>
      </div>
    </div>
  );
};

export default Card;
