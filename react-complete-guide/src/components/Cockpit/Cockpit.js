import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = props => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    /* const timer = setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000); */
    toggleBtnRef.current.click();
    return () => {
      // clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPeople) {
    btnClass = classes.Red;
  }

  if (props.peopleLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.peopleLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle People
      </button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log In</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(cockpit);
