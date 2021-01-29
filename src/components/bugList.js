import React, { Component } from 'react';
import BugCard from './bugCard';

export default class BugList extends Component {
  render() {
    return (
      <main>
        <BugCard />
        <BugCard />
        <BugCard />
        <BugCard />
      </main>
    );
  }
}
