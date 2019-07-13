import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/People/Person/Person';

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
    let btnClass = null;

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return ( 
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
                click={() => this.deletePersonHandler(index)} />
            );
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.people.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.people.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App.</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePeopleHandler}>Toggle People</button>
        {people}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, 
    //   React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
