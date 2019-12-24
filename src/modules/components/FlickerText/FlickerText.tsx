import React from "react";
import "./FlickerText.module.scss";

const FlickerText = ({ lightText, dimText }) => {

    return (
      <div className="wrapper">
        <h1 data-heading={lightText}>
          {lightText} <span>{dimText}</span>
        </h1>
      </div>
    );
}

export default FlickerText;