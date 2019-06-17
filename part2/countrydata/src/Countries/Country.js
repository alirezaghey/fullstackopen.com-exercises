import React from 'react';

const Country = ({country, handleSetDetailedCountry}) => {
    return (
        <div>
            <strong>{country.name} </strong>
            <button onClick={()=> handleSetDetailedCountry(country.name)}>Show Details!</button>
        </div>
    );
};

export default Country;