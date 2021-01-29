import React from 'react';

function BugCard(props) {
  const handleClick = (e) => {
    const caughtBug = e.target.name;
    props.incrementBugCount(caughtBug);
  };

  return (
    <section className="bug-container">
      <h2>{props.bugName}</h2>
      <img src={props.img} alt={props.bugName} className="card-img" />
      <p> Times caught: {props.timesCaught}</p>
      <button onClick={handleClick} name={props.bugName}>
        Caught You!
      </button>
    </section>
  );
}

export default BugCard;
