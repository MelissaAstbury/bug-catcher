import React from 'react';

function BugCard(props) {
  return (
    <section>
      <h2>{props.bugName}</h2>
      <img src={props.img} alt={props.bugName} />
      <p> Times caught: {props.timesCaught}</p>
      <button>Caught You!</button>
    </section>
  );
}

export default BugCard;
