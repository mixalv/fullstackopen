import { useDispatch, useSelector } from "react-redux"
import { anecdotesInitializer, voteFor } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"
import { useEffect } from "react"


const AnecdoteList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(anecdotesInitializer())
  }, [dispatch])
  const anecdotes = useSelector(({filter, anecdotes}) => {
    console.log('current state', anecdotes)
    let anecdotesCopy = [...anecdotes]
    anecdotesCopy.sort((a, b) => b.votes - a.votes)
    if (filter.length === 0) {
      return anecdotesCopy
    }
    const filtered = anecdotesCopy.filter(e => {
      if(e.content.toLowerCase().includes(filter.toLowerCase())) {
        return true
      }
      return false
    })
    return filtered
  })
  
  const vote = (anecdote) => {
    dispatch(voteFor(anecdote))
    const message = `You voted for '${anecdote.content}'`
    dispatch(setNotification(message, 5))
  }
  return(
    <>
    {
    anecdotes.map(anecdote =>
      
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList