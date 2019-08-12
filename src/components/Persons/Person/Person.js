import React, {Component} from 'react';

import classes from './Person.css';

class Person extends Component {
    // const rnd = Math.random();
    // if (rnd > 0.7){
    //     throw new Error('Something went wrong');
    // }
    render(){
        console.log('[Person.js] rendering...');
        return (
            <div className={classes.Person} >
                <h4 onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</h4>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
                <p>{this.props.comment}</p>
            </div>        
        )
    }
    
};

export default Person;