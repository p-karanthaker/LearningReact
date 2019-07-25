import React, { Component } from 'react';
import classes from './App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    people: [
      { id: '123', name: 'Karan', age: 25 },
      { id: '321', name: 'Max', age: 28 },
      { id: '456', name: 'Person', age: 30 }
    ],
    showPeople: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  nameChangedHandler = (event, id) => {
    // Find the index of the person by their object id.
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });

    // Copy the person from the state array object.
    const person = {
      ...this.state.people[personIndex]
    };

    // Edit the person's name based on the event value.
    person.name = event.target.value;

    // Copy the people array in state into a new array.
    const people = [...this.state.people];

    // Update the person.
    people[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        people,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  togglePeopleHandler = () => {
    const showing = this.state.showPeople;
    this.setState({ showPeople: !showing });
  };

  deletePersonHandler = personIndex => {
    // const people = this.state.people.slice();
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({ people: people });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log('[App.js] render');
    let people = null;

    if (this.state.showPeople) {
      people = (
        <People
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Aux>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPeople={this.state.showPeople}
              peopleLength={this.state.people.length}
              clicked={this.togglePeopleHandler}
              login={this.loginHandler}
            />
          ) : null}
          {people}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'},
    //   React.createElement('h1', null, 'Does this work now?'))
  }
}

export default withClass(App, classes.App);
