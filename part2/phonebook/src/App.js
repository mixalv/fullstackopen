import { useState, useEffect } from 'react'
import Names from './components/Names'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personsService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
        personsService.getAllPersons().then(persons => setPersons(persons))
  }, [])

  const filterHandler = (event) => {
    setFilter(event.target.value) 
  }

  const personsToShow = () => {
    if (filter.length === 0) {
      return persons
    } else {
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

  const notificate = (text, state) =>  {
    setMessage({text, state})
          setTimeout(() => {
            setMessage(null)
          }, 5000)
  }


  const addName = (event) => {
    event.preventDefault()
    const newPerson = {name: newName, number: newNumber}
    if (checkSame(newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)) {
        const oldPerson = persons.find(person => person.name === newName)
        const id = oldPerson.id
        personsService
          .updatePerson(newPerson, id)
          .then(response => {
            setPersons(persons.map(element => element.id !== id ? element : response))
          })
          notificate(`The number for ${newName} is successfully changed`, 'success')
      }
    } else {
      personsService
        .createPerson(newPerson)
        .then(created => setPersons(persons.concat(created)))
        setNewName('')
        setNewNumber('')
        notificate(`Added ${newName}`, 'success')
    }
    
  }

  const changeName = (event) => {
    const value = event.target.value
    setNewName(value)
    if (checkSame(value)) {
      window.alert(`${value} is already added to phonebook`)
    }
    
  }

  const changeNumber =(event) => {
    setNewNumber(event.target.value)
  }

  const deletePerson = (event)  => {
    if (window.confirm(`Delete ${event.target.name} ?`)) {
        const id = parseInt(event.target.value)
    const newPersons = persons.filter(person => person.id !== id)
    setPersons(newPersons)
    personsService.deletePerson(id).then( () => {
        setPersons(newPersons)
    })
    .catch(() => {
        notificate(`Information of ${event.target.name} has been already removed from the server`, 'error')
        
    })
    }}

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter filter={filter} filterHandler={filterHandler} />
      <PersonForm addName={addName} newName={newName} changeName={changeName} 
      newNumber={newNumber} changeNumber={changeNumber} />
      <h2>Numbers</h2>
      <Names persons={personsToShow()} setPersons={setPersons} clickHandler={deletePerson} />
    </div>
  )
}

export default App