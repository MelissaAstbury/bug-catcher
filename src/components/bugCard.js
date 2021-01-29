import React from 'react';

function BugCard(props) {
  return (
    <section className="bug-container">
      <h2>{props.bugName}</h2>
      <img src={props.img} alt={props.bugName} className="card-img" />
      <p> Times caught: {props.timesCaught}</p>
      <button>Caught You!</button>
    </section>
  );
}

export default BugCard;
