import React from "react";
import"./Card.scss";

interface CardProps {
  img: string;
  caption: string;
  text: string;
  header: string;
}

const Card: React.FC<CardProps> = ({ img, caption, text, header }) => {
  return (
    <div className="card">
      <figure className="card__shape" style={{ backgroundImage: `url(${img})`}}>
        <figcaption className="card__caption">{caption}</figcaption>
      </figure>
        <div className="card__text">
          <h3>{header}</h3>
          <p>{text}</p>
        </div>
    </div>
  );
};

export default Card;
