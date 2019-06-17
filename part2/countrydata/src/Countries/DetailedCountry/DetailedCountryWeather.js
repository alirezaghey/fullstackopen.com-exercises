import React from 'react';

const DetailedCountryWeather = ({weather}) => {
    const output = weather.location !== undefined ? (
        <div>
            <h5>Weather in {weather.location.name}</h5>
            <div><strong>Temperature: </strong>{weather.current.temp_c} Celsius</div>
            <img src={weather.current.condition.icon} alt="alt text" />
            <div><strong>Wind: </strong>{weather.current.wind_kph} kph; Direction {weather.current.wind_dir}</div>
        </div>
    ) :
    null;
    return (
        output
    );
};

export default DetailedCountryWeather;