import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request can be sent here
    const timer = setTimeout(()=>{
      alert('Saved data to cloud!');
    }, 1000)
    // return will run after the first render but before the main useEffect()
    return () =>{
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () =>{
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  });

  const assignedClasses = [];
  let btnClass = "";
  if(props.showPersons){
      btnClass = classes.Red;
  }
  
  if(props.personsLength < 3){
    assignedClasses.push(classes.red); //classes = ['red']
  }
  if(props.personsLength < 2){
    assignedClasses.push(classes.bold); //classes = ['red', bold']
  }

  return(
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          {/* Don't use often to avoid frequent re-render. Use bind (below) instead! */}
          <button
              className={btnClass}
              onClick={props.clicked}>Toggle Names</button>
      </div>
  );
}
// Memo prevents re-render with every change of parent component
export default React.memo(cockpit);