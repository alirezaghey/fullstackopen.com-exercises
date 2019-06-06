import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.js';
import Content from './Content';
import Total from './Total';


const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
        {
            name: "Fundamentals of React",
            exercises: 10
        },
        {
            name: "Using props to pass data",
            exercises: 7
        },
        {
            name: "State of a component",
            exercises: 14
        }
    ]
};

    return (
        <div>
            <Header courseName={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

