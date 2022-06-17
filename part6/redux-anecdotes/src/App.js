import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import ConnectedNotification from './components/Notification'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <ConnectedNotification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App