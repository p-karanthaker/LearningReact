import React from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends React.Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <React.Fragment>
        <AuthContext.Consumer>
          {context =>
            context.authenticated ? (
              <p>Authenticated!</p>
            ) : (
              <p>Please log in.</p>
            )
          }
        </AuthContext.Consumer>
        {/* {this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in.</p>} */}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          type="text"
          // ref={inputEl => {this.inputElement = inputEl;}}
          ref={this.inputElementRef}
          key="i3"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </React.Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
