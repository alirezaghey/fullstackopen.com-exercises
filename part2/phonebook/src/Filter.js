import React from 'react';

const Filter = ({filter, handleFilterChange}) => {
    return (
        <input value={filter} onChange={handleFilterChange}/>
    );
};

export default Filter;