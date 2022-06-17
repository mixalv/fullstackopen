import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from "../reducers/notificationReducer"


const AnecdoteForm = (props) => {
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    props.createAnecdote(content)
    const message = `you added '${content}'`
    event.target.anecdote.value = ''
    props.setNotification(message, 5)
  }
  return(
    <>
    <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button>create</button>
      </form>
    </>
  )
}

export default connect(
  null,
  {
    createAnecdote,
    setNotification
  }
)(AnecdoteForm)