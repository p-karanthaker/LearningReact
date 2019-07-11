import React from 'react';
import './App.css';
import UserInput from './UserIO/UserInput';
import UserOutput from './UserIO/UserOutput';

class App extends React.Component {
  state = {
    username: 'Karan'
  }

  userInputHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    const style = {
      width: '100%'
    };

    return (
      <div className="App">
        <UserInput style={style} changed={this.userInputHandler} value={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
