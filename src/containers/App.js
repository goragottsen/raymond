import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps, ', props);
    return state;
  }

  // componentWillMount(){
  //   // used to prepare the state correctly
  //   // now mainly done in constructor or getDerivedStateFromProps
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }



  state = {
    persons: [
      { id: 'djbhfb', name: 'Nik', age: 34},
      { id: 'jdkhweiw', name: 'Ana', age: 29},
      { id: 'djksjdks', name: 'Aisa', age: 3}
    ],
    otherState: 'some other value',
    showNames: false,
    showCockpit: true
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

  // accessing render method doesn't mean that real dom is re-rendered, but V-Dom is --> check if real dom has to be changed
  render() {
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showNames){
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} 
            />
    }

    return (
        <Aux>
        <button onClick={()=>{
          this.setState({showCockpit: false})}
          }>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showNames}
          personsLength={this.state.persons.length}
          clicked={this.toggleNamesHandler}/>
          : null}
        {persons}
      </Aux>  
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
