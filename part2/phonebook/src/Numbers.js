import React from 'react';
import Number from './Number';

const Numbers = ({persons}) => {
    return (
        persons.map(person => <Number person={person} key={person.id}/>)
    );
};

export default Numbers;