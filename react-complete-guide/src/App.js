import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [ peopleState, setPeopleState ] = useState({
    people: [
      {name: 'Karan', age: 25},
      {name: 'Max', age: 28}
    ]
  });

  const [ otherState, setOtherState ] = useState('some other value');

  console.log(peopleState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DONT DO THIS: peopleState.people[0].name = 'Karan Thaker';
    setPeopleState({
      people: [
        {name: 'Karan Thaker', age: 25},
        {name: 'Max', age: 29}
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App.</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={peopleState.people[0].name} age={peopleState.people[0].age} />
      <Person name={peopleState.people[1].name} age={peopleState.people[1].age}>Hy Hobbies: Racing</Person>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, 
  //   React.createElement('h1', null, 'Does this work now?'))
}

export default app;
