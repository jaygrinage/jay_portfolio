import React from 'react';

import './App.scss';

import { LandingPage } from 'modules/pages';
import Tilt from "react-tilt";


const App: React.FC = () => {
  return (
    <div className="App">
      <Tilt
        className="Tilt"
        options={{
          reverse: true,  // reverse the tilt direction
          max: 1,     // max tilt rotation (degrees)
          perspective: 2000,   // Transform perspective, the lower the more extreme the tilt gets.
          scale: 1,      // 2 = 200%, 1.5 = 150%, etc..
          speed: 300,    // Speed of the enter/exit transition
          transition: true,   // Set a transition on enter/exit.
          axis: null,   // What axis should be disabled. Can be X or Y.
          reset: false,    // If the tilt effect has to be reset on exit.
          easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        }}
      >
        <LandingPage />
      </Tilt>
      </div>
  );
}

export default App;
