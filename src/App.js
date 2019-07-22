import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

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
    // Inline style - scoped to the component
    const style = {
      backgroundColor: 'rgb(91, 195, 230)',
      color: 'white',
      font: 'inherit',
      border: '1px solid turquoise',
      padding: '8px',
      cursor: 'pointer',
      outline: 'none',
      borderRadius: '5px',
    }

    let persons = null;
    if(this.state.showNames){
      persons = (
        <div>
          {this.state.persons.map((person, index)=> {
            return <Person
              name={person.name}
              age={person.age}
              comment={person.comment}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              />
          })}
            </div>
      );
      style.backgroundColor = 'rgb(248, 76, 76)';
    }

    const assignedClasses = [];

    if(this.state.persons.length < 3){
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if(this.state.persons.length < 2){
      assignedClasses.push(classes.bold); //classes = ['red', bold']
    }
    return (
        <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
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
