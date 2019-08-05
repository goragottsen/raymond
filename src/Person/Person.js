import React from 'react';

import classes from './Person.css';

const person = (props) => {
    const rnd = Math.random();
    if (rnd > 0.7){
        throw new Error('Something went wrong');
    }

    return (
        <div className={classes.Person} >
            <h4 onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</h4>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <p>{props.comment}</p>
        </div>
    
    )
};

export default person;