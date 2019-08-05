import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = "";
    if(props.showPersons){
        btnClass = classes.Red;
    }
    
    if(props.persons.length < 3){
      assignedClasses.push(classes.red); //classes = ['red']
    }
    if(props.persons.length < 2){
      assignedClasses.push(classes.bold); //classes = ['red', bold']
    }

    return(
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            {/* Don't use often to avoid frequent re-render. Use bind (below) instead! */}
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Names</button>
        </div>
    );
}

export default cockpit;