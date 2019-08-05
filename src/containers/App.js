import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
class App extends Component {
  state = {
    persons: [
      { id: 'djbhfb', name: 'Nik', age: 34},
      { id: 'jdkhweiw', name: 'Ana', age: 29},
      { id: 'djksjdks', name: 'Aisa', age: 3}
    ],
    otherState: 'some other value',
    showNames: false
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]; // a new array with the objects from new array
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // cons person = Object.assign({}, this.state.persons[personIndex]);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value; 

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  toggleNamesHandler = () => {
    const doesShow = this.state.showNames;
    this.setState({showNames : !doesShow}) // Awwwwww, so cool 
  }

  render() {

    let persons = null;

    if(this.state.showNames){
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} 
            />
    }

    return (
        <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showNames}
          persons={this.state.persons}
          clicked={this.toggleNamesHandler}/>
        {persons}
      </div>  
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
