import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchCountries from './SearchCountries';
import Countries from './Countries/Countries';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [searchedCountry, setNewSearchedCountry] = useState('');
  const [detailedCountry, setDetailedCountry] = useState('');
  const [detailedCountryWeather, setDetailedCountryWeather] = useState({});

  
  useEffect( () => {
    axios
      .get('https://restcountries.eu/rest/v2/name/' + searchedCountry)
      .then( res => {
        if(res.status === 200) setCountries(res.data);
      })
      .catch( res => console.log(res))
  }, [searchedCountry])
  
  useEffect ( () => {
    axios
      .get('https://api.apixu.com/v1/current.json?key=fb558ca89abc47c29f8171838191706&q=' + detailedCountry)
      .then(res => {
        if(res.status === 200) setDetailedCountryWeather(res.data);
      })
      .catch(res => console.log(res));
  }, [detailedCountry])
  return (
  
    <div><SearchCountries value={searchedCountry} handleSetNewSearchVal={(event) => setNewSearchedCountry(event.target.value)}></SearchCountries>
    <Countries countries={countries} detailedCountry={detailedCountry} handleSetDetailedCountry={setDetailedCountry} weather={detailedCountryWeather}/>
      </div>
  );
}

export default App;
