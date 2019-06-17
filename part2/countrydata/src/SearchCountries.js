import React from 'react';

const SearchCountries = ({value, handleSetNewSearchVal}) => {
    return (
        <div>
            find countries: <input type="text" value={value} onChange={handleSetNewSearchVal}></input>
        </div>
    );
};

export default SearchCountries;