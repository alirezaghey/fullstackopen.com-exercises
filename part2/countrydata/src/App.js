import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SearchCountries from './SearchCountries';
import Countries from './Countries/Countries';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [searchedCountry, setNewSearchedCountry] = useState('');
  const [detailedCountry, setDetailedCountry] = useState('');

  
  useEffect( () => {
    axios
      .get('https://restcountries.eu/rest/v2/name/' + searchedCountry)
      .then( res => {
        res.status === 200 ? setCountries(res.data) : console.log("Not Found!")
      })
      .catch( res => console.log(res))
  }, [searchedCountry])
  return (
  
    <div><SearchCountries value={searchedCountry} handleSetNewSearchVal={(event) => setNewSearchedCountry(event.target.value)}></SearchCountries>
    <Countries countries={countries} detailedCountry={detailedCountry} handleSetDetailedCountry={setDetailedCountry}/>
      </div>
  );
}

export default App;
