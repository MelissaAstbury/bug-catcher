import React from 'react';
import butterfly from '../images/butterfly.jpeg';

function title() {
  return (
    <header>
      <img src={butterfly} alt="colourful butterfly" />
      <h1>Melissa's Bug Catcher</h1>
    </header>
  );
}

export default title;
