import React from 'react';
import Header from './Header';
import Part from './Part';
import Total from './Total';

const Course = ({course}) => {
    return (
        <div>
            <Header courseName={course.name}/>
            {course.parts.map(part => <Part name={part.name}
                                        exerciseNumber={part.exercises}
                                        key={part.id}/>)}
            <Total exercises={course.parts.map(part => part.exercises)}/>
        </div>
    );
};

export default Course;