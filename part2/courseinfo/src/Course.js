import React from 'react';
import Header from './Header';
import Part from './Part';

const Course = ({course}) => {
    return (
        <div>
            <Header courseName={course.name}/>
            {course.parts.map(part => <Part name={part.name}
                                        exerciseNumber={part.exercises}
                                        key={part.id}/>)}
        </div>
    );
};

export default Course;