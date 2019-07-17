import React from 'react';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <h4 onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</h4>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
            <p>{props.comment}</p>
        </div>
    
    )
};

export default person;