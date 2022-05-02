import personsService from '../services/persons'

const Names = ({persons, setPersons}) => {

    const clickHandler = (event)  => {
        if (window.confirm(`Delete ${event.target.name} ?`)) {
            const id = parseInt(event.target.value)
        const newPersons = persons.filter(person => person.id !== id)
        setPersons(newPersons)
        personsService.deletePerson(id).then( () => {
            setPersons(newPersons)
        })
        }
        
       
    }
    return (
        <ul>
        {persons.map(person => <li key={person.name}>{person.name} {person.number} <button value={person.id} name={person.name} onClick={clickHandler}>delete</button></li>)}
        </ul>
    )
}

export default Names