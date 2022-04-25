import { useState } from 'react'

const Button = ({handler, text}) => {
  return (
    <button onClick={handler}>{text}</button>
  )
}

const Votes = ({value}) => <p>has {value} votes</p>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  // let votesArray = Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const index = votes.indexOf(Math.max(...votes))

  const nextHandler = () => {
    let newSelect = getRandomInt(7)
    while (newSelect === selected) {
      console.log(newSelect)
      newSelect = getRandomInt(7)
    }
    setSelected(newSelect)
  }

  const votesHandler = () => {
    const newArray = [...votes]
    newArray[selected]+=1
    setVotes(newArray)
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <Votes value={votes[selected]} />
      <Button handler={votesHandler} text='vote' />
      <Button handler={nextHandler} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[index]}</p>
      <Votes value={votes[index]} />
    </div>
  )
}

export default App