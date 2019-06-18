import React from 'react';
import Number from './Number';

const Numbers = ({persons, handleDelete}) => {
    return (
        persons.map(person => <Number person={person} key={person.id} handleDelete={handleDelete}/>)
    );
};

export default Numbers;