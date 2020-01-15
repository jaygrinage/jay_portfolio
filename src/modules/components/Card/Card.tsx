import React from "react";
import"./Card.scss";

interface CardProps {
  img: string;
  caption: string;
  text: string;
  header: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ img, link, caption, text, header }) => {
  return (
    <div className="card">
      <a href={link} rel="noopener noreferrer" target="_blank">
        <figure
          className="card__shape"
          style={{ backgroundImage: `url(${img})` }}
        >
          <figcaption className="card__caption">{caption}</figcaption>
        </figure>
      </a>

      <a href={link} rel="noopener noreferrer" target="_blank">
        <div className="card__text">
          <h3>{header}</h3>
          <p>{text}</p>
        </div>
      </a>
    </div>
  );
};

export default Card;
