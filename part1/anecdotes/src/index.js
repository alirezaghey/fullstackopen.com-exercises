import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [mostVotes, setMostVotes] = useState(undefined);

  const handleGetAnecdoteClick = () => setSelected(Math.floor(Math.random()*anecdotes.length))
  const handleVoteClick = () => {
    const newVotes = [...votes];
    newVotes[selected]++;
    let max = 0;
    for (let i = 1; i < anecdotes.length; i++)
      if (newVotes[i] > newVotes[max])
        max = i;
    setMostVotes(max);
    setVotes(newVotes);
  }

  return (
    <>
    <h1>Anecdote of the Day!</h1>
    <div>
      {anecdotes[selected]}
    </div>
    <div>
      Has {votes[selected]} votes!
    </div>
      <button onClick={handleVoteClick}>Vote!</button>
      <button onClick={handleGetAnecdoteClick}>Get Anecdote!</button>
      {mostVotes !== undefined ?
      <div>
        <h3>Anecdote with most votes!</h3>
        {anecdotes[mostVotes]}
        <div>
          Has {votes[mostVotes]} votes!
        </div>
      </div>
    :
    null}
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)