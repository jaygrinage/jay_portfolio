
import React from "react";
import './Kumya.scss';

const Kumya = ({ text, link }) => {
  return (
    <div className="grid__item color-4">
      <a className="link link--kumya" href={link}><span data-letters={text}>{text}</span></a>
    </div>
    );
}


export default Kumya;