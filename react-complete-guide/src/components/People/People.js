import React from 'react';
import Person from './Person/Person';

class People extends React.Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[People.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[People.js] componentWillReceiveProps', props);
  // }

  // componentWillUpdate() {}

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[People.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[People.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[People.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[People.js] componentWillUnmount');
  }

  render() {
    console.log('[People.js] rendering...');
    return this.props.people.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
          click={() => this.props.clicked(index)} />
      );
    });
  }
};

export default People;
