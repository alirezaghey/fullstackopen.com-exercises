import React, {useState} from 'react';
import Button from './Button';
import Stat from './Stat';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {setGood(good+1); };
  const handleNeutral = () => {setNeutral(neutral+1);};
  const handleBad = () => {setBad(bad+1); };
  
  return (
    <>
    <h1>Give feedback</h1>
    <Button clickHandler={handleGood} text="Good"/>
    <Button clickHandler={handleNeutral} text="Neutral"/>
    <Button clickHandler={handleBad} text="Bad"/>
    <h2>Statistics</h2>
    {good === 0 && neutral === 0 && bad === 0 ? (
      <div>No feedback given yet!</div>
    ) : (
      <table>
        <tbody>
        <Stat text="Good" value={good}/>
        <Stat text="Neutral" value={neutral}/>
        <Stat text="Bad" value={bad}/>
        <Stat text="Total" value={good+neutral+bad}/>
        <Stat text="Average" value={(good-bad)/(good+neutral+bad)}/>
        <Stat text="Positive" value={good/(good+neutral+bad)*100}/>
        </tbody>
      </table>
    )}
    
    </>
  );
}

export default App;
