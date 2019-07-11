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

  switchNameHandler = () => {
    console.log('Was clicked!');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App.</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} />
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>Hy Hobbies: Racing</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, 
    //   React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
