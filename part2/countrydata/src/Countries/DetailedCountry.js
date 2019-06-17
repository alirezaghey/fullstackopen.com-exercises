import React from 'react';

const DetailedCountry = ({country}) => {
    return (
        <div>
          <h3>{country.name}</h3>
          <div><strong>Capital: </strong>{country.capital}</div>
          <div><strong>Population: </strong>{country.population}</div>
          <h5>Languages:</h5>
          <ol>
              {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
          </ol>
          <img src={country.flag}/>
        </div>
    );
};

export default DetailedCountry;