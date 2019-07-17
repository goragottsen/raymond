import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Nik', age: 34 },
      { name: 'Ana', age: 29 },
      { name: 'Aisa', age: 3}
    ],
    otherState: 'some other value',
    showNames: false
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 34 },
        { name: 'Anastasiia', age: 29 },
        { name: 'Aisa', age: 6 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Nik', age: 34 },
        { name: event.target.value, age: 29 },
        { name: 'Aisa', age: 3 }
      ]
    });
  }

  toggleNamesHandler = () => {
    const doesShow = this.state.showNames;
    this.setState({showNames : !doesShow}) // Awwwwww, so cool 
  }

  render() {
    // Inline style - scoped to the component
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if(this.state.showNames){
      persons = (
        <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
              />
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Niko')}
                changed={this.nameChangedHandler}
              >
                My Hobbies: Hiking
              </Person>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}
              />
            </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* Don't use often to avoid frequent re-render. Use bind (below) instead! */}
        <button 
        style={style}
        onClick={this.toggleNamesHandler}>Toggle Names</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
