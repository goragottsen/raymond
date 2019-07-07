import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Nik", age: 34 },
      {name: "Ana", age: 29 },
      {name: "Aisa", age: 3 }
    ]
  });

  const switchNameHandler = () =>{
    //console.log("was clicked!");
    //DON'T DO THIS: this.state.persons[0].name = "Anastasiia";
    setPersonsState({
      persons: [
        {name: "Nikolai", age: 34 },
        {name: "Anastasiia", age: 29 },
        {name: "Aisa", age: 3 }
      ]
    }
    )
  }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <p>This is really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobby: Hiking</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App:)'))
  }


export default app;


