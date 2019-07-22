import React from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends React.Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <React.Fragment>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type='text' onChange={this.props.changed} value={this.props.name} />
      </React.Fragment>
    );
  }
};

export default withClass(Person, classes.Person);
