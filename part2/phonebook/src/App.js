import { useState, useEffect } from 'react'
import Names from './components/Names'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

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
      }
      // window.alert(`${newName} is already added to phonebook`)
    } else {
      personsService
        .createPerson(newPerson)
        .then(created => setPersons(persons.concat(created)))
        setNewName('')
        setNewNumber('')
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

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} filterHandler={filterHandler} />
      <PersonForm addName={addName} newName={newName} changeName={changeName} 
      newNumber={newNumber} changeNumber={changeNumber} />
      <h2>Numbers</h2>
      <Names persons={personsToShow()} setPersons={setPersons} />
    </div>
  )
}

export default App