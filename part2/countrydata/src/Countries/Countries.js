import React from 'react';
import DetailedCountry from './DetailedCountry/DetailedCountry';
import Country from './Country';

const Countries = ({countries, detailedCountry, handleSetDetailedCountry, weather}) => {
    return (
            countries.map(country => {
                return (
                    <div key={country.alpha2Code}>
                        {country.name === detailedCountry ?
                        <DetailedCountry country={country} weather={weather} /> :
                        <Country country={country} handleSetDetailedCountry={handleSetDetailedCountry}/>
                        
                    }

                    </div>
                
                )
            })

    );
};

export default Countries;