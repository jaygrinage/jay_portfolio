import React from 'react';
import { ParallaxProvider } from "react-scroll-parallax";

import './App.scss';

import { LandingPage } from 'modules/pages';

const App: React.FC = () => {
  return (
    <ParallaxProvider>
      <div className="App">
        <LandingPage />
      </div>
    </ParallaxProvider>
  );
}

export default App;
