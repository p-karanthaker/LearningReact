import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {name: 'Karan', age: 25},
      {name: 'Max', age: 28}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DONT DO THIS: this.state.people[0].name = 'Karan Thaker';
    this.setState({
      people: [
        {name: newName, age: 25},
        {name: 'Max', age: 29}
      ],
      showPeople: false
    });
  }

  nameChangedHandler = event => {
    this.setState({
      people: [
        {name: 'Karan Thaker', age: 25},
        {name: event.target.value, age: 29}
      ]
    });
  }

  togglePeopleHandler = () => {
      const showing = this.state.showPeople;
      this.setState({showPeople: !showing});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          <Person 
            name={this.state.people[0].name} 
            age={this.state.people[0].age}
            click={this.switchNameHandler.bind(this, 'KARAN THAKER')} />
          <Person 
            name={this.state.people[1].name} 
            age={this.state.people[1].age}
            changed={this.nameChangedHandler}>Hy Hobbies: Racing</Person>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePeopleHandler}>Toggle People</button>
        {people}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, 
    //   React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
