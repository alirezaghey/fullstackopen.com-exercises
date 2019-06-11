import React from 'react';
import Number from './Number';

const Numbers = ({numbers}) => {
    return (
        numbers.map(person => <Number number={person} key={person.name}/>)
    );
};

export default Numbers;