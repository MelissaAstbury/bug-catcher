import React from 'react';
import butterfly from '../images/butterfly.jpeg';

function title() {
  return (
    <header className="title">
      <img src={butterfly} alt="colourful butterfly" className="header-img" />
      <h1>Melissa's Bug Catcher</h1>
    </header>
  );
}

export default title;
