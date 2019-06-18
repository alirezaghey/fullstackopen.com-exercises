import React from 'react';

const Number = ({person, handleDelete}) => {
    return (
        <div>
            {person.name}: {person.number} <button onClick={() => handleDelete(person.id)}>Delete</button>
        </div>
    );
};

export default Number;