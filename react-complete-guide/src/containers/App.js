import React, { Component } from 'react';
import classes from './App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    people: [
      {id: '123', name: 'Karan', age: 25},
      {id: '321', name: 'Max', age: 28},
      {id: '456', name: 'Person', age: 30}
    ]
  }

  nameChangedHandler = (event, id) => {
    // Find the index of the person by their object id.
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });

    // Copy the person from the state array object.
    const person = {
      ...this.state.people[personIndex]
    }

    // Edit the person's name based on the event value.
    person.name = event.target.value;

    // Copy the people array in state into a new array.
    const people = [...this.state.people];

    // Update the person.
    people[personIndex] = person;

    this.setState({
      people
    });
  }

  togglePeopleHandler = () => {
      const showing = this.state.showPeople;
      this.setState({showPeople: !showing});
  }

  deletePersonHandler = (personIndex) => {
    // const people = this.state.people.slice();
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({people: people});
  }

  render() {
    let people = null;

    if (this.state.showPeople) {
      people = (
        <People 
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          showPeople={this.state.showPeople}
          people={this.state.people}
          clicked={this.togglePeopleHandler} />
        {people}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, 
    //   React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
