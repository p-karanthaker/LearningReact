import React from 'react';
import './App.css';
import ValidateText from './Validation/TextValidation';
import CharComponent from './CharComponents/CharComponent';

class App extends React.Component {

  state = {
    value: ''
  }

  inputChangeHandler = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  charClickHandler = (charIndex) => {
    const text = this.state.value.split('');
    text.splice(charIndex, 1);

    this.setState({
      value: text.join('')
    });
  }

  render() {
    const charList = this.state.value.split('').map((char, index) => {
      return <CharComponent char={char} key={index} click={() => this.charClickHandler(index)} />
    })

    return (
      <div className='App'>
        <input type='text' onChange={this.inputChangeHandler} value={this.state.value} />
        <p>Length of text: {this.state.value.length}</p>
        <ValidateText textLength={this.state.value.length} />
        {charList}
      </div>
    );
  }
}

export default App;
