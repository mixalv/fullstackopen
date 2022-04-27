import { useState } from 'react'
import Names from './components/Names'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '7777'
  }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const filterHandler = (event) => {
    setFilter(event.target.value) 
  }

  const personsToShow = () => {
    if (filter.length === 0) {
      console.log('nothing'+filter)
      return persons
    } else {
      console.log('something'+filter)
      return persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    }
  }

  const checkSame = (value) => {
    if (persons.some(person => person.name === value)) {
      return true
    }
    else {
      return false
    }
  }


  const addName = (event) => {
    event.preventDefault()
    if (checkSame(newName)) {
      window.alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat({name: newName, number: newNumber}))
    }
    
    setNewName('')
    setNewNumber('')
  }

  const changeName = (event) => {
    const value = event.target.value
    console.log(value)
    setNewName(value)
    if (checkSame(value)) {
      window.alert(`${value} is already added to phonebook`)
    }
    
  }

  const changeNumber =(event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} filterHandler={filterHandler} />
      <PersonForm addName={addName} newName={newName} changeName={changeName} 
      newNumber={newNumber} changeNumber={changeNumber} />
      <h2>Numbers</h2>
      <Names persons={personsToShow()} />
    </div>
  )
}

export default App