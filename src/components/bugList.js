import React, { Component } from 'react';
import BugCard from './bugCard';
import butterfly from '../images/butterfly.jpeg';
import ladybird from '../images/ladybird.jpg';
import snail from '../images/snail.jpg';
import dragonFly from '../images/dragonFly.jpg';

export default class BugList extends Component {
  state = {
    bugs: {
      butterfly: { timesCaught: 0, img: butterfly },
      ladybird: { timesCaught: 0, img: ladybird },
      snail: { timesCaught: 0, img: snail },
      dragonfly: { timesCaught: 0, img: dragonFly },
    },
  };
  render() {
    const bugsArray = Object.entries(this.state.bugs);

    return (
      <main>
        {bugsArray.map(([name, data]) => {
          return (
            <BugCard
              key={name}
              bugName={name}
              {...data}
              incrementBugCount={this.incrementBugCount}
            />
          );
        })}
      </main>
    );
  }

  incrementBugCount = (caughtBug) => {
    this.setState((currentState) => {
      return {
        bugs: {
          ...currentState.bugs,
          [caughtBug]: {
            ...currentState.bugs[caughtBug],
            timesCaught: currentState.bugs[caughtBug].timesCaught + 1,
          },
        },
      };
    });
  };
}
